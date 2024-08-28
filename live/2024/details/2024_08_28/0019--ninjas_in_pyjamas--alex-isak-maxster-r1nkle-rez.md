### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: alex, isak, maxster, r1nkle, REZ<br />
Global Rank: [19](../../standings_global_2024_08_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_28.md)<br />
Regional Rank: [14]( ../../standings_europe_2024_08_28.md)<br />
<br />
Final Rank Value:  1410.1<br />
<br />
Final Rank Value (1410.1) = Starting Rank Value (1504.7) + Head To Head Adjustments (-94.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.621[<sup>1</sup>](#table2)
- Bounty Collected: 0.554[<sup>2</sup>](#table1)
- Opponent Network: 0.280[<sup>2</sup>](#table1)
- LAN Wins: 0.775[<sup>2</sup>](#table1)

The average of these factors is 0.557<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1504.7
- 400 + ( ( 0.557 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1504.7


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
|           42 |      294 | 2024-08-21 | AMKAL           | L   | 1.000      | -            | -                | -                | -         |   -28.27 | alex, isak, maxster, r1nkle, REZ               |
|           41 |      394 | 2024-08-19 | Cloud9          | L   | 1.000      | -            | -                | -                | -         |   -30.12 | alex, isak, maxster, r1nkle, REZ               |
|           40 |      401 | 2024-08-19 | PARIVISION      | W   | 1.000      | -            | -                | -                | -         |     4.04 | alex, isak, maxster, r1nkle, REZ               |
|           39 |      864 | 2024-08-04 | Astralis        | L   | 1.000      | -            | -                | -                | -         |    -8.85 | alex, isak, maxster, r1nkle, REZ               |
|           38 |      888 | 2024-08-03 | G2              | L   | 1.000      | -            | -                | -                | -         |    -1.95 | alex, isak, maxster, r1nkle, REZ               |
|           37 |      926 | 2024-08-02 | FaZe            | W   | 1.000      | 0.581        | 0.707 (0.410)    | 0.437 (0.254)    | 1 (1.000) |    24.73 | alex, isak, maxster, r1nkle, REZ               |
|           36 |      970 | 2024-08-01 | Cloud9          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.87 | alex, isak, maxster, r1nkle, REZ               |
|           35 |     1022 | 2024-07-31 | G2              | L   | 1.000      | -            | -                | -                | -         |    -1.80 | alex, isak, maxster, r1nkle, REZ               |
|           34 |     1376 | 2024-07-20 | Passion UA      | L   | 0.940      | -            | -                | -                | -         |   -26.57 | alex, isak, maxster, r1nkle, REZ               |
|           33 |     1450 | 2024-07-18 | MOUZ NXT        | W   | 0.927      | 0.500        | -                | 0.840 (0.390)    | -         |     2.33 | alex, isak, maxster, r1nkle, REZ               |
|           32 |     1582 | 2024-07-16 | Nexus           | W   | 0.914      | 0.500        | -                | 0.457 (0.209)    | -         |     0.52 | alex, isak, maxster, r1nkle, REZ               |
|           31 |     1844 | 2024-06-16 | fnatic          | L   | 0.715      | -            | -                | -                | -         |   -14.90 | alex, isak, maxster, r1nkle, REZ               |
|           30 |     1905 | 2024-06-14 | paiN            | W   | 0.702      | 0.548        | 0.402 (0.155)    | 0.886 (0.341)    | 1 (0.702) |    11.84 | alex, isak, maxster, r1nkle, REZ               |
|           29 |     1913 | 2024-06-14 | 9z              | W   | 0.701      | 0.548        | 0.398 (0.153)    | 0.523 (0.201)    | 1 (0.701) |    10.25 | alex, isak, maxster, r1nkle, REZ               |
|           28 |     2074 | 2024-06-09 | The MongolZ     | L   | 0.667      | -            | -                | -                | -         |    -2.19 | alex, isak, maxster, r1nkle, REZ               |
|           27 |     2140 | 2024-06-08 | FURIA           | W   | 0.661      | 0.715        | 0.333 (0.157)    | 0.531 (0.251)    | 1 (0.661) |    14.68 | alex, isak, maxster, r1nkle, REZ               |
|           26 |     2190 | 2024-06-07 | fnatic          | W   | 0.654      | 0.715        | 0.343 (0.160)    | 0.707 (0.331)    | 1 (0.654) |     8.10 | alex, isak, maxster, r1nkle, REZ               |
|           25 |     2256 | 2024-06-06 | Sashi           | W   | 0.647      | 0.715        | 0.178 (0.082)    | 0.977 (0.452)    | 1 (0.647) |     3.36 | alex, isak, maxster, r1nkle, REZ               |
|           24 |     2278 | 2024-06-06 | The MongolZ     | L   | 0.646      | -            | -                | -                | -         |    -1.79 | alex, isak, maxster, r1nkle, REZ               |
|           23 |     2290 | 2024-06-06 | Astralis        | W   | 0.645      | 0.715        | 0.401 (0.185)    | -                | 1 (0.645) |    15.02 | alex, isak, maxster, r1nkle, REZ               |
|           22 |     2324 | 2024-06-05 | HEROIC          | W   | 0.640      | 0.715        | 0.225 (0.103)    | 0.379 (0.174)    | 1 (0.640) |    10.26 | alex, isak, maxster, r1nkle, REZ               |
|           21 |     2341 | 2024-06-05 | ENCE            | W   | 0.639      | -            | -                | -                | 1 (0.639) |     5.77 | alex, isak, maxster, r1nkle, REZ               |
|           20 |     2788 | 2024-05-19 | Sangal          | L   | 0.528      | -            | -                | -                | -         |   -13.95 | alex, isak, maxster, r1nkle, REZ               |
|           19 |     2814 | 2024-05-18 | Metizport       | L   | 0.521      | -            | -                | -                | -         |   -15.61 | alex, isak, maxster, r1nkle, REZ               |
|           18 |     2889 | 2024-05-16 | Sangal          | W   | 0.507      | 0.500        | 0.283 (0.072)    | 0.794 (0.201)    | -         |     2.20 | alex, isak, maxster, r1nkle, REZ               |
|           17 |     3207 | 2024-05-05 | FlyQuest        | L   | 0.432      | -            | -                | -                | -         |   -12.36 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           16 |     3214 | 2024-05-04 | HEROIC          | W   | 0.427      | 0.889        | 0.225 (0.085)    | -                | -         |     6.01 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           15 |     3228 | 2024-05-03 | BOSS            | W   | 0.421      | -            | -                | -                | -         |     0.35 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           14 |     3256 | 2024-05-02 | Qiang           | L   | 0.413      | -            | -                | -                | -         |   -12.47 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           13 |     3303 | 2024-04-30 | HEROIC          | L   | 0.400      | -            | -                | -                | -         |    -7.13 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           12 |     3612 | 2024-04-18 | brazylijski luz | L   | 0.320      | -            | -                | -                | -         |    -9.89 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|           11 |     3756 | 2024-04-12 | OG              | L   | 0.280      | -            | -                | -                | -         |    -8.29 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|           10 |     3782 | 2024-04-11 | BetBoom         | L   | 0.273      | -            | -                | -                | -         |    -6.50 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            9 |     3879 | 2024-04-09 | Gods Reign      | W   | 0.260      | -            | -                | -                | -         |     0.11 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            8 |     4009 | 2024-04-04 | Aurora          | L   | 0.227      | -            | -                | -                | -         |    -3.31 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            7 |     4017 | 2024-04-04 | Metizport       | W   | 0.226      | -            | -                | -                | -         |     0.14 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            6 |     4050 | 2024-04-03 | Aurora          | L   | 0.221      | -            | -                | -                | -         |    -3.27 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            5 |     4065 | 2024-04-03 | Sampi           | L   | 0.219      | -            | -                | -                | -         |    -6.67 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            4 |     4089 | 2024-04-02 | FAVBET          | W   | 0.214      | -            | -                | -                | -         |     0.12 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            3 |     4094 | 2024-04-02 | Monte           | W   | 0.213      | -            | -                | -                | -         |     0.35 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            2 |     4183 | 2024-03-27 | 500             | W   | 0.174      | -            | -                | -                | -         |     0.05 | alex, BluePho3nix, maxster, REZ, Silence       |
|            1 |     4189 | 2024-03-27 | Verdant         | W   | 0.174      | -            | -                | -                | -         |     0.18 | alex, BluePho3nix, maxster, REZ, Silence       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($71,317.83)
- Divide that value by the 5th highest value among all rosters ($290,989.03)
- The final value (0.25) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-25 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-08-04 |      1.000 | $10,500.00     | $10,500.00      |
| 2024-06-16 |      0.716 | $7,000.00      | $5,009.32       |
| 2024-06-09 |      0.667 | $56,000.00     | $37,341.50      |
| 2024-05-12 |      0.480 | $12,000.00     | $5,761.03       |
| 2024-04-14 |      0.294 | $26,250.00     | $7,705.99       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
