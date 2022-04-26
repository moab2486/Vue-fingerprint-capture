<script>
    import { setReaderSelectField, readyForEnroll } from "./../assets/util/utilities.js";

    export default {
        data(){
            return {
            }
        },

        mounted(){
            this.beginEnrollment();
        },

        methods:{
            beginEnrollment(){
                setReaderSelectField("enrollReaderSelect");
                myReader.setStatusField("enrollmentStatusField");
            }, 

            beginCapture(){
                if(!readyForEnroll()){
                    return;
                }
                
                myReader.currentHand = new Hand();
                storeUserID();
                myReader.reader.startCapture();
                showNextNotEnrolledItem();
            },

            getNextNotEnrolledID(){
                let indexFingers = document.getElementById("indexFingers");
            
                let enrollUserId = document.getElementById("userID").value;
            
                let indexFingerElement = findElementNotEnrolled(indexFingers);
            
                if (indexFingerElement !== null && enrollUserId !== ""){
                    return indexFingerElement.id;
                }

                return "";
            },

            showNextNotEnrolledItem(){
                let nextElementID = getNextNotEnrolledID();
                let markup = null;
                if(nextElementID.startsWith("index")){
                    markup = `<span class="icon capture-indexfinger" title="not_enrolled"></span>`;
                }
            
                if(nextElementID !== "" && markup){
                    let nextElement = document.getElementById(nextElementID);
                    nextElement.innerHTML = markup;
                }
            },

            findElementNotEnrolled(element){
                if (element){
                    for(let fingerElement of element.children){
                        if(fingerElement.firstElementChild.title === "not_enrolled"){
                            return fingerElement;
                        }
                    }
                }
            
                return null;
            },

            storeUserID(){
                let enrollUserId = document.getElementById("userID").value;
                myReader.currentHand.id = enrollUserId;
            },

            showSampleCaptured(){
                let nextElementID = getNextNotEnrolledID();
                let markup = null;
                if(nextElementID.startsWith("index")){
                    markup = `<span class="icon icon-indexfinger-enrolled" title="enrolled"></span>`;
                }
            
                if(nextElementID !== "" && markup){
                    let nextElement = document.getElementById(nextElementID);
                    nextElement.innerHTML = markup;
                }
            },

            storeSample(sample){
                let samples = JSON.parse(sample.samples);
                let sampleData = samples[0].Data;
            
                let nextElementID = getNextNotEnrolledID();
            
                if(nextElementID.startsWith("index")){
                    myReader.currentHand.addIndexFingerSample(sampleData);
                    showSampleCaptured();
                    showNextNotEnrolledItem();
                    return;
                }
            },

            clearCapture(){
                this.clearInputs();
                this.clearPrints();
                this.clearHand();
                myReader.reader.stopCapture();
            },
 
            clearInputs(){
                document.getElementById("userID").value = "";
            },
 
            clearPrints(){
                let indexFingers = document.getElementById("indexFingers");
            
                if (indexFingers){
                    for(let indexfingerElement of indexFingers.children){
                        indexfingerElement.innerHTML = `<span class="icon icon-indexfinger-not-enrolled" title="not_enrolled"></span>`;
                    }
                }
            },

            clearHand(){
                myReader.currentHand = null;
            },

            serverEnroll(){
                if(!readyForEnroll()){
                    return;
                }
            
                let data = myReader.currentHand.generateFullHand();
                let successMessage = "Enrollment Successful!";
                let failedMessage = "Enrollment Failed!";
                let payload = `data=${data}`;
            
                let xhttp = new XMLHttpRequest();
            
                xhttp.onreadystatechange = function(){
                    if(this.readyState === 4 && this.status === 200){
                        if(this.responseText === "success"){
                            showMessage(successMessage, "success");
                        }
                        else{
                            showMessage(`${failedMessage} ${this.responseText}`);
                        }
                    }
                };
            
                xhttp.open("POST", "/api/v1/enroll", true);
                xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhttp.send(payload);
            }
       }
    }
</script>

<template>
    <div class="card p-3">
        <div class="card-body">
            <div class="modal-header">
                <h3 class="modal-title my-text my-pri-color" id="createEnrollmentTitle">Finger print capture / verication</h3>
            </div>
            <div class="modal-body">
                <form action="#" onsubmit="return false">
                    <input type="hidden" id="userID"/>
                    <div id="enrollmentStatusField" class="text-center">
                        <!--Enrollment Status will be displayed Here-->
                    </div>
                    <div class="form-row mt-3">
                        <div class="col mb-3 mb-md-0 text-center">
                            <label for="enrollReaderSelect" class="my-text7 my-pri-color">Choose Fingerprint Scanner</label>
                            <select name="readerSelect" id="enrollReaderSelect" class="form-control" @click="beginEnrollment">
                                <!-- <option selected>Select Fingerprint Scanner</option> -->
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-row mt-1">
                        <div class="col text-center">
                            <p class="my-text7 my-pri-color mt-3">Capture Index Finger</p>
                        </div>
                    </div>
                    <div id="indexFingers" class="row justify-content-center">
                        <div id="indexfinger1" class="col mb-3 mb-md-0 text-center">
                            <span class="icon icon-indexfinger-not-enrolled" title="not_enrolled"></span>
                        </div>
                    </div>
                    
                    <div class="d-flex m-3 mt-md-5 justify-content-around"> 
                        <div class="">
                            <button class="btn btn-primary btn-block my-sec-bg my-text-button py-1" type="submit" @click="beginCapture">Start Capture</button>
                        </div>
                        <div class="">
                            <button class="btn btn-primary btn-block my-sec-bg my-text-button py-1" type="submit" @click="serverEnroll">Save / verify</button>
                        </div>
                        <div class="">
                            <button class="btn btn-secondary btn-outline-warning btn-block my-text-button py-1 border-0" type="button" @click="clearCapture">Clear</button>
                        </div>
                    </div>
                </form>
            </div>

            <!-- <div class="modal-footer">
                <div class="form-row">
                       <button class="btn btn-secondary my-text8 btn-outline-danger border-0" type="button" data-dismiss="modal" @click="closeModal">Close</button>
                     <div class="col">
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<style scoped>
    @import '@/design/custom.css';
</style>