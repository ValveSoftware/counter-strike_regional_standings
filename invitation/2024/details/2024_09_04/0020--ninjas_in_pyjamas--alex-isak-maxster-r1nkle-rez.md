### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: alex, isak, maxster, r1nkle, REZ<br />
Global Rank: [20](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_04.md)<br />
Regional Rank: [15]( ../../standings_europe_2024_09_04.md)<br />
<br />
Final Rank Value:  1360.2<br />
<br />
Final Rank Value (1360.2) = Starting Rank Value (1487.2) + Head To Head Adjustments (-127.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.597[<sup>1</sup>](#table2)
- Bounty Collected: 0.543[<sup>2</sup>](#table1)
- Opponent Network: 0.285[<sup>2</sup>](#table1)
- LAN Wins: 0.771[<sup>2</sup>](#table1)

The average of these factors is 0.549<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1487.2
- 400 + ( ( 0.549 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 1487.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |       32 | 2024-09-03 | HEROIC          | W   | 1.000      | 0.889        | 0.207 (0.184)    | 0.368 (0.327)    | 1 (1.000) |    16.66 | alex, isak, maxster, r1nkle, REZ               |
|           44 |      139 | 2024-08-29 | Monte           | L   | 1.000      | -            | -                | -                | -         |   -27.19 | alex, isak, maxster, r1nkle, REZ               |
|           43 |      150 | 2024-08-29 | GUN5            | L   | 1.000      | -            | -                | -                | -         |   -28.56 | alex, isak, maxster, r1nkle, REZ               |
|           42 |      495 | 2024-08-21 | AMKAL           | L   | 1.000      | -            | -                | -                | -         |   -28.26 | alex, isak, maxster, r1nkle, REZ               |
|           41 |      595 | 2024-08-19 | Cloud9          | L   | 1.000      | -            | -                | -                | -         |   -30.04 | alex, isak, maxster, r1nkle, REZ               |
|           40 |      602 | 2024-08-19 | PARIVISION      | W   | 1.000      | -            | -                | -                | -         |     4.00 | alex, isak, maxster, r1nkle, REZ               |
|           39 |     1065 | 2024-08-04 | Astralis        | L   | 0.993      | -            | -                | -                | -         |    -9.76 | alex, isak, maxster, r1nkle, REZ               |
|           38 |     1089 | 2024-08-03 | G2              | L   | 0.987      | -            | -                | -                | -         |    -1.72 | alex, isak, maxster, r1nkle, REZ               |
|           37 |     1127 | 2024-08-02 | FaZe            | W   | 0.980      | 0.581        | 0.597 (0.340)    | 0.435 (0.248)    | 1 (0.980) |    24.60 | alex, isak, maxster, r1nkle, REZ               |
|           36 |     1171 | 2024-08-01 | Cloud9          | W   | 0.973      | 0.581        | -                | 0.377 (0.213)    | 1 (0.973) |     0.99 | alex, isak, maxster, r1nkle, REZ               |
|           35 |     1223 | 2024-07-31 | G2              | L   | 0.966      | -            | -                | -                | -         |    -1.55 | alex, isak, maxster, r1nkle, REZ               |
|           34 |     1577 | 2024-07-20 | Passion UA      | L   | 0.893      | -            | -                | -                | -         |   -25.22 | alex, isak, maxster, r1nkle, REZ               |
|           33 |     1651 | 2024-07-18 | MOUZ NXT        | W   | 0.881      | 0.500        | -                | 0.853 (0.376)    | -         |     2.18 | alex, isak, maxster, r1nkle, REZ               |
|           32 |     1783 | 2024-07-16 | Nexus           | W   | 0.867      | 0.500        | -                | 0.450 (0.195)    | -         |     0.52 | alex, isak, maxster, r1nkle, REZ               |
|           31 |     2045 | 2024-06-16 | fnatic          | L   | 0.668      | -            | -                | -                | -         |   -14.21 | alex, isak, maxster, r1nkle, REZ               |
|           30 |     2106 | 2024-06-14 | paiN            | W   | 0.656      | 0.548        | 0.419 (0.151)    | 0.963 (0.346)    | 1 (0.656) |    13.30 | alex, isak, maxster, r1nkle, REZ               |
|           29 |     2114 | 2024-06-14 | 9z              | W   | 0.654      | 0.548        | 0.343 (0.123)    | -                | 1 (0.654) |     9.13 | alex, isak, maxster, r1nkle, REZ               |
|           28 |     2275 | 2024-06-09 | The MongolZ     | L   | 0.620      | -            | -                | -                | -         |    -2.09 | alex, isak, maxster, r1nkle, REZ               |
|           27 |     2341 | 2024-06-08 | FURIA           | W   | 0.614      | 0.715        | 0.317 (0.139)    | 0.531 (0.233)    | 1 (0.614) |    13.75 | alex, isak, maxster, r1nkle, REZ               |
|           26 |     2391 | 2024-06-07 | fnatic          | W   | 0.607      | 0.715        | 0.293 (0.127)    | 0.703 (0.306)    | 1 (0.607) |     7.24 | alex, isak, maxster, r1nkle, REZ               |
|           25 |     2457 | 2024-06-06 | Sashi           | W   | 0.601      | 0.715        | 0.152 (0.065)    | 0.966 (0.415)    | 1 (0.601) |     3.06 | alex, isak, maxster, r1nkle, REZ               |
|           24 |     2479 | 2024-06-06 | The MongolZ     | L   | 0.599      | -            | -                | -                | -         |    -1.72 | alex, isak, maxster, r1nkle, REZ               |
|           23 |     2491 | 2024-06-06 | Astralis        | W   | 0.598      | 0.715        | 0.345 (0.148)    | -                | 1 (0.598) |    13.19 | alex, isak, maxster, r1nkle, REZ               |
|           22 |     2525 | 2024-06-05 | HEROIC          | W   | 0.594      | 0.715        | 0.207 (0.088)    | -                | 1 (0.594) |     8.65 | alex, isak, maxster, r1nkle, REZ               |
|           21 |     2542 | 2024-06-05 | ENCE            | W   | 0.592      | -            | -                | -                | -         |     4.71 | alex, isak, maxster, r1nkle, REZ               |
|           20 |     2989 | 2024-05-19 | Sangal          | L   | 0.481      | -            | -                | -                | -         |   -11.97 | alex, isak, maxster, r1nkle, REZ               |
|           19 |     3015 | 2024-05-18 | Metizport       | L   | 0.474      | -            | -                | -                | -         |   -14.14 | alex, isak, maxster, r1nkle, REZ               |
|           18 |     3090 | 2024-05-16 | Sangal          | W   | 0.461      | 0.500        | -                | 0.831 (0.192)    | -         |     2.73 | alex, isak, maxster, r1nkle, REZ               |
|           17 |     3408 | 2024-05-05 | FlyQuest        | L   | 0.386      | -            | -                | -                | -         |   -11.18 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           16 |     3415 | 2024-05-04 | HEROIC          | W   | 0.380      | 0.889        | 0.207 (0.070)    | -                | -         |     4.78 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           15 |     3429 | 2024-05-03 | BOSS            | W   | 0.374      | -            | -                | -                | -         |     0.32 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           14 |     3457 | 2024-05-02 | Qiang           | L   | 0.367      | -            | -                | -                | -         |   -11.07 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           13 |     3504 | 2024-04-30 | HEROIC          | L   | 0.353      | -            | -                | -                | -         |    -6.84 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           12 |     3813 | 2024-04-18 | brazylijski luz | L   | 0.273      | -            | -                | -                | -         |    -8.46 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|           11 |     3957 | 2024-04-12 | OG              | L   | 0.233      | -            | -                | -                | -         |    -6.92 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|           10 |     3983 | 2024-04-11 | BetBoom         | L   | 0.227      | -            | -                | -                | -         |    -5.47 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            9 |     4080 | 2024-04-09 | Gods Reign      | W   | 0.214      | -            | -                | -                | -         |     0.09 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            8 |     4210 | 2024-04-04 | Aurora          | L   | 0.181      | -            | -                | -                | -         |    -3.01 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            7 |     4218 | 2024-04-04 | Metizport       | W   | 0.180      | -            | -                | -                | -         |     0.11 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            6 |     4251 | 2024-04-03 | Aurora          | L   | 0.174      | -            | -                | -                | -         |    -2.94 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            5 |     4266 | 2024-04-03 | Sampi           | L   | 0.172      | -            | -                | -                | -         |    -5.21 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            4 |     4290 | 2024-04-02 | FAVBET          | W   | 0.167      | -            | -                | -                | -         |     0.11 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            3 |     4295 | 2024-04-02 | Monte           | W   | 0.167      | -            | -                | -                | -         |     0.26 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            2 |     4384 | 2024-03-27 | 500             | W   | 0.128      | -            | -                | -                | -         |     0.04 | alex, BluePho3nix, maxster, REZ, Silence       |
|            1 |     4390 | 2024-03-27 | Verdant         | W   | 0.127      | -            | -                | -                | -         |     0.14 | alex, BluePho3nix, maxster, REZ, Silence       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($66,536.98)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-25 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-08-04 |      0.993 | $10,500.00     | $10,428.83      |
| 2024-06-16 |      0.669 | $7,000.00      | $4,683.71       |
| 2024-06-09 |      0.620 | $56,000.00     | $34,736.64      |
| 2024-05-12 |      0.434 | $12,000.00     | $5,202.84       |
| 2024-04-14 |      0.247 | $26,250.00     | $6,484.96       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
