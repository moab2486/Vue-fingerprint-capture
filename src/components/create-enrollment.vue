<script>
</script>

<template>
    <div class="card p-3">
        <div class="card-body">
            <div class="modal-header">
                <h3 class="modal-title my-text my-pri-color" id="createEnrollmentTitle">Finger print capture / verication</h3>
            </div>
            <div class="modal-body">
                <form action="#" onsubmit="return false">
                    <div id="enrollmentStatusField" class="text-center">
                        <!--Enrollment Status will be displayed Here-->
                    </div>
                    <div class="form-row mt-3">
                        <div class="col mb-3 mb-md-0 text-center">
                            <label for="enrollReaderSelect" class="my-text7 my-pri-color">Choose Fingerprint Scanner</label>
                            <select name="readerSelect" id="enrollReaderSelect" class="form-control" @click="beginEnrollment">
                                <option selected>Select Fingerprint Scanner</option>
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
                    
                    
                    <div class="row m-3 mt-md-5 justify-content-center">
                        <div class="col-4">
                            <button class="btn btn-primary btn-block my-sec-bg my-text-button py-1" type="submit" @click="beginCapture">Start Capture</button>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-primary btn-block my-sec-bg my-text-button py-1" type="submit" @click="serverEnroll">Save / verify</button>
                        </div>
                        <div class="col-4">
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