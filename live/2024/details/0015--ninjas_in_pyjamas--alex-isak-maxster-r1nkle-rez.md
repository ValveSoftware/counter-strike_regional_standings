### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: alex, isak, maxster, r1nkle, REZ<br />
Global Rank: [15](../standings_global_2024_08_14.md)<br />
<br />
Region: [Europe]( ../standings_europe_2024_08_14.md)<br />
Regional Rank: [11]( ../standings_europe_2024_08_14.md)<br />
<br />
Final Rank Value:  1508.0<br />
<br />
Final Rank Value (1508.0) = Starting Rank Value (1581.8) + Head To Head Adjustments (-73.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.615[<sup>1</sup>](#table2)
- Bounty Collected: 0.559[<sup>2</sup>](#table1)
- Opponent Network: 0.323[<sup>2</sup>](#table1)
- LAN Wins: 0.899[<sup>2</sup>](#table1)

The average of these factors is 0.599<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1581.8
- 400 + ( ( 0.599 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 1581.8


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
|           39 |      342 | 2024-08-04 | Astralis        | L   | 1.000      | -            | -                | -                | -         |    -9.09 | alex, isak, maxster, r1nkle, REZ               |
|           38 |      366 | 2024-08-03 | G2              | L   | 1.000      | -            | -                | -                | -         |    -2.44 | alex, isak, maxster, r1nkle, REZ               |
|           37 |      404 | 2024-08-02 | FaZe            | W   | 1.000      | 0.581        | 0.557 (0.324)    | 0.408 (0.237)    | 1 (1.000) |    23.63 | alex, isak, maxster, r1nkle, REZ               |
|           36 |      448 | 2024-08-01 | Cloud9          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.41 | alex, isak, maxster, r1nkle, REZ               |
|           35 |      500 | 2024-07-31 | G2              | L   | 1.000      | -            | -                | -                | -         |    -2.29 | alex, isak, maxster, r1nkle, REZ               |
|           34 |      854 | 2024-07-20 | Passion UA      | L   | 1.000      | -            | -                | -                | -         |   -29.03 | alex, isak, maxster, r1nkle, REZ               |
|           33 |      928 | 2024-07-18 | MOUZ NXT        | W   | 1.000      | 0.500        | -                | 0.929 (0.464)    | -         |     2.12 | alex, isak, maxster, r1nkle, REZ               |
|           32 |     1060 | 2024-07-16 | Nexus           | W   | 1.000      | 0.500        | -                | 0.548 (0.274)    | -         |     0.42 | alex, isak, maxster, r1nkle, REZ               |
|           31 |     1322 | 2024-06-16 | fnatic          | L   | 0.807      | -            | -                | -                | -         |   -17.32 | alex, isak, maxster, r1nkle, REZ               |
|           30 |     1383 | 2024-06-14 | paiN            | W   | 0.795      | 0.548        | 0.369 (0.161)    | 0.874 (0.381)    | 1 (0.795) |     9.82 | alex, isak, maxster, r1nkle, REZ               |
|           29 |     1391 | 2024-06-14 | 9z              | W   | 0.793      | 0.548        | 0.408 (0.177)    | 0.591 (0.257)    | 1 (0.793) |    10.51 | alex, isak, maxster, r1nkle, REZ               |
|           28 |     1552 | 2024-06-09 | The MongolZ     | L   | 0.759      | -            | -                | -                | -         |    -3.04 | alex, isak, maxster, r1nkle, REZ               |
|           27 |     1618 | 2024-06-08 | FURIA           | W   | 0.753      | 0.715        | 0.301 (0.162)    | 0.506 (0.272)    | 1 (0.753) |    13.96 | alex, isak, maxster, r1nkle, REZ               |
|           26 |     1668 | 2024-06-07 | fnatic          | W   | 0.746      | 0.715        | 0.352 (0.188)    | 0.639 (0.341)    | 1 (0.746) |     8.57 | alex, isak, maxster, r1nkle, REZ               |
|           25 |     1734 | 2024-06-06 | Sashi           | W   | 0.740      | 0.715        | 0.183 (0.097)    | 1.000 (0.529)    | 1 (0.740) |     3.14 | alex, isak, maxster, r1nkle, REZ               |
|           24 |     1756 | 2024-06-06 | The MongolZ     | L   | 0.738      | -            | -                | -                | -         |    -2.54 | alex, isak, maxster, r1nkle, REZ               |
|           23 |     1768 | 2024-06-06 | Astralis        | W   | 0.737      | 0.715        | 0.411 (0.217)    | 0.410 (0.216)    | 1 (0.737) |    17.33 | alex, isak, maxster, r1nkle, REZ               |
|           22 |     1802 | 2024-06-05 | HEROIC          | W   | 0.732      | 0.715        | 0.220 (0.115)    | -                | 1 (0.732) |    12.37 | alex, isak, maxster, r1nkle, REZ               |
|           21 |     1819 | 2024-06-05 | ENCE            | W   | 0.731      | 0.715        | 0.160 (0.084)    | -                | 1 (0.731) |     6.31 | alex, isak, maxster, r1nkle, REZ               |
|           20 |     2266 | 2024-05-19 | Sangal          | L   | 0.620      | -            | -                | -                | -         |   -17.30 | alex, isak, maxster, r1nkle, REZ               |
|           19 |     2292 | 2024-05-18 | Metizport       | L   | 0.613      | -            | -                | -                | -         |   -18.84 | alex, isak, maxster, r1nkle, REZ               |
|           18 |     2367 | 2024-05-16 | Sangal          | W   | 0.600      | 0.500        | -                | 0.851 (0.255)    | -         |     1.75 | alex, isak, maxster, r1nkle, REZ               |
|           17 |     2685 | 2024-05-05 | FlyQuest        | L   | 0.525      | -            | -                | -                | -         |   -14.94 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           16 |     2692 | 2024-05-04 | HEROIC          | W   | 0.519      | 0.889        | 0.220 (0.102)    | -                | -         |     7.73 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           15 |     2706 | 2024-05-03 | BOSS            | W   | 0.513      | -            | -                | -                | -         |     0.31 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           14 |     2734 | 2024-05-02 | ex-PERA         | L   | 0.506      | -            | -                | -                | -         |   -15.43 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           13 |     2781 | 2024-04-30 | HEROIC          | L   | 0.492      | -            | -                | -                | -         |    -8.34 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           12 |     3090 | 2024-04-18 | brazylijski luz | L   | 0.412      | -            | -                | -                | -         |   -12.81 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|           11 |     3234 | 2024-04-12 | OG              | L   | 0.372      | -            | -                | -                | -         |   -11.30 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|           10 |     3260 | 2024-04-11 | BetBoom         | L   | 0.366      | -            | -                | -                | -         |    -9.22 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            9 |     3357 | 2024-04-09 | Gods Reign      | W   | 0.353      | -            | -                | -                | -         |     0.12 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            8 |     3487 | 2024-04-04 | Aurora          | L   | 0.320      | -            | -                | -                | -         |    -4.82 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            7 |     3495 | 2024-04-04 | Metizport       | W   | 0.319      | -            | -                | -                | -         |     0.17 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            6 |     3528 | 2024-04-03 | Aurora          | L   | 0.313      | -            | -                | -                | -         |    -4.84 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            5 |     3543 | 2024-04-03 | Sampi           | L   | 0.311      | -            | -                | -                | -         |    -9.62 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            4 |     3567 | 2024-04-02 | FAVBET          | W   | 0.306      | -            | -                | -                | -         |     0.12 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            3 |     3572 | 2024-04-02 | Monte           | W   | 0.305      | -            | -                | -                | -         |     0.42 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            2 |     3661 | 2024-03-27 | 500             | W   | 0.267      | -            | -                | -                | -         |     0.06 | alex, BluePho3nix, maxster, REZ, Silence       |
|            1 |     3667 | 2024-03-27 | Verdant         | W   | 0.266      | -            | -                | -                | -         |     0.19 | alex, BluePho3nix, maxster, REZ, Silence       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($75,673.64)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.24) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-04 |      1.000 | $10,500.00     | $10,500.00      |
| 2024-06-16 |      0.808 | $7,000.00      | $5,656.14       |
| 2024-06-09 |      0.759 | $56,000.00     | $42,516.07      |
| 2024-05-12 |      0.572 | $12,000.00     | $6,869.87       |
| 2024-04-14 |      0.386 | $26,250.00     | $10,131.57      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
