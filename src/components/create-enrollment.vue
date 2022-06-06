<script>
    import { beginEnrollment, beginCapture, clearCapture, serverEnroll, beginIdentification, captureForIdentify, serverIdentify } from "./../assets/js/custom.js";
    export default {
        data(){
            return {
            }
        },

        mounted(){
            this.beginEnrollments();
        },

        methods:{
            beginEnrollments(){
                beginEnrollment()
            },

            beginCaptures(){
                beginCapture()
            },

            clearCaptures(){
                clearCapture()
            },

            serverEnrolls(){
                serverEnroll()
            },

            beginIdentifications(){
                beginIdentification()
            },

            captureForIdentifys(){
                captureForIdentify()
            },

            serverIdentifys(){
                serverIdentify()
            }
        }
    }
</script>

<template>
    <div class="card p-3">
        <div class="container">
            <div id="controls" class="row justify-content-center mx-5 mx-sm-0 mx-lg-5">
                <div class="col-sm mb-2 ml-sm-5">
                    <button id="createEnrollmentButton" type="button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#createEnrollment" @click="beginEnrollments">Create Enrollment</button>
                </div>
                <div class="col-sm mb-2 mr-sm-5">
                    <button id="verifyIdentityButton" type="button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#verifyIdentity" @click="beginIdentifications">Verify Identity</button>
                </div>
            </div>
        </div>

        <div class="card-body">
            <section>
                <!--Create Enrolment Section-->
                <div class="modal fade" id="createEnrollment" data-backdrop="static" tabindex="-1" aria-labelledby="createEnrollmentTitle" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="modal-title my-text my-pri-color" id="createEnrollmentTitle">Create Enrollment</h3>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="clearCaptures()">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form action="#" onsubmit="return false">
                                    <div id="enrollmentStatusField" class="text-center">
                                        <!--Enrollment Status will be displayed Here-->
                                    </div>
                                    <div class="form-row mt-3">
                                        <div class="col mb-3 mb-md-0 text-center">
                                            <label for="enrollReaderSelect" class="my-text7 my-pri-color">Choose Fingerprint Reader</label>
                                            <select name="readerSelect" id="enrollReaderSelect" class="form-control" @change="beginEnrollments()">
                                                <option selected>Select Fingerprint Reader</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-row mt-2">
                                        <div class="col mb-3 mb-md-0 text-center">
                                            <label for="userID" class="my-text7 my-pri-color">Specify UserID</label>
                                            <input id="userID" type="text" class="form-control" required>
                                        </div>
                                    </div>
                                    <div class="form-row mt-1">
                                        <div class="col text-center">
                                            <p class="my-text7 my-pri-color mt-3">Capture Finger</p>
                                        </div>
                                    </div>
                                    <div class="form-row justify-content-center d-flex">
                                        <div id="thumbFingers" class="form-row justify-content-center">
                                            <div id="thumbFinger1" class="col mb-3 mb-md-0 text-center">
                                                <span class="icon icon-thumbfinger-not-enrolled" title="not_enrolled"></span>
                                            </div>
                                        </div>

                                        <div id="indexFingers" class="form-row justify-content-center">
                                            <div id="indexfinger1" class="col mb-3 mb-md-0 text-center">
                                                <span class="icon icon-indexfinger-not-enrolled" title="not_enrolled"></span>
                                            </div>
                                        </div>

                                        <div id="middleFingers" class="form-row justify-content-center">
                                            <div id="middleFinger1" class="col mb-3 mb-md-0 text-center">
                                                <span class="icon icon-middlefinger-not-enrolled" title="not_enrolled"></span>
                                            </div>
                                        </div>

                                        <div id="ringFingers" class="form-row justify-content-center">
                                            <div id="ringFinger1" class="col mb-3 mb-md-0 text-center">
                                                <span class="icon icon-ringfinger-not-enrolled" title="not_enrolled"></span>
                                            </div>
                                        </div>

                                        <div id="littleFingers" class="form-row justify-content-center">
                                            <div id="littleFinger1" class="col mb-3 mb-md-0 text-center">
                                                <span class="icon icon-littlefinger-not-enrolled" title="not_enrolled"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-row m-3 mt-md-5 justify-content-center">
                                        <div class="col-4">
                                            <button class="btn btn-primary btn-block my-sec-bg my-text-button py-1" type="submit" @click="beginCaptures()">Start Capture</button>
                                        </div>
                                        <div class="col-4">
                                            <button class="btn btn-primary btn-block my-sec-bg my-text-button py-1" type="submit" @click="serverEnrolls">Enroll</button>
                                        </div>
                                        <div class="col-4">
                                            <button class="btn btn-secondary btn-outline-warning btn-block my-text-button py-1 border-0" type="button" @click="clearCaptures()">Clear</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <div class="form-row">
                                    <div class="col">
                                        <button class="btn btn-secondary my-text8 btn-outline-danger border-0" type="button" data-dismiss="modal" @click="clearCaptures()">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <!--Verify Identity Section-->
                <div id="verifyIdentity" class="modal fade" data-backdrop="static" tabindex="-1" aria-labelledby="verifyIdentityTitle" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="modal-title my-text my-pri-color" id="verifyIdentityTitle">Identity Verification</h3>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="clearCaptures">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form action="#" onsubmit="return false">
                                    <div id="verifyIdentityStatusField" class="text-center">
                                        <!--verifyIdentity Status will be displayed Here-->
                                    </div>
                                    <div class="form-row mt-3">
                                        <div class="col mb-3 mb-md-0 text-center">
                                            <label for="verifyReaderSelect" class="my-text7 my-pri-color">Choose Fingerprint Reader</label>
                                            <select name="readerSelect" id="verifyReaderSelect" class="form-control" @change="beginIdentifications">
                                                <option selected>Select Fingerprint Reader</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-row mt-4">
                                        <div class="col mb-md-0 text-center">
                                            <label for="userIDVerify" class="my-text7 my-pri-color m-0">Specify UserID</label>
                                            <input type="text" id="userIDVerify" class="form-control mt-1" required>
                                        </div>
                                    </div>
                                    <div class="form-row mt-3">
                                        <div class="col text-center">
                                            <p class="my-text7 my-pri-color mt-1">Capture Verification Finger</p>
                                        </div>
                                    </div>
                                    <div id="verificationFingers" class="form-row justify-content-center">
                                        <div id="verificationFinger" class="col mb-md-0 text-center">
                                            <span class="icon icon-indexfinger-not-enrolled" title="not_enrolled"></span>
                                        </div>
                                    </div>
                                    <div class="form-row mt-3" id="userDetails">
                                        <!--this is where user details will be displayed-->
                                    </div>
                                    <div class="form-row m-3 mt-md-5 justify-content-center">
                                        <div class="col-4">
                                            <button class="btn btn-primary btn-block my-sec-bg my-text-button py-1" type="submit" @click="captureForIdentifys">Start Capture</button>
                                        </div>
                                        <div class="col-4">
                                            <button class="btn btn-primary btn-block my-sec-bg my-text-button py-1" type="submit" @click="serverIdentifys">Identify</button>
                                        </div>
                                        <div class="col-4">
                                            <button class="btn btn-secondary btn-outline-warning btn-block my-text-button py-1 border-0" type="button" @click="clearCapture()">Clear</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <div class="form-row">
                                    <div class="col">
                                        <button class="btn btn-secondary my-text8 btn-outline-danger border-0" type="button" data-dismiss="modal" @click="clearCapture()">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped>
    @import '@/design/custom.css';
</style>