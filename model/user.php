<?php


class User{
    private $id;
    private $username;
    private $password;
    private $nickname;
    private $credit;

    public function getId(){
        return $this->id;
    }
    public function setId($id){
        $this->id = $id;
    }
    public function getUsername() {
        return $this->username;
    }
    public function setUsername($username){
        $this->username = $username;
    }
    public function getPassword() {
        return $this->password;
    }
    public function setPassword($password) {
        $this->password = $password;
    }
    public function getNickname() {
        return $this->nickname;
    }
    public function setNickname($nickame) {
        $this->nickname = $nickame;
    }
    public function getCreait() {
        return $this->credit;
    }
    public function setCreait($creait){
        $this->credit = $creait;
    }
}