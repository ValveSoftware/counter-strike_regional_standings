### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: alex, isak, maxster, r1nkle, REZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [12](../standings_global.md)<br />
Regional Rank: [10]( ../standings_europe.md)<br />
Final Rank Value:  1688.8<br />
<br />
Final Rank Value (1688.8) = Starting Rank Value (1821.6) + Head To Head Adjustments (-132.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.683[<sup>1</sup>](#table2)
- Bounty Collected: 0.597[<sup>2</sup>](#table1)
- Opponent Network: 0.368[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.662<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1821.6
- 400 + ( ( 0.662 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1821.6


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
|           32 |       49 | 2024-07-16 | Nexus           | W   | 1.000      | -            | -                | -                | -         |     0.19 | alex, isak, maxster, r1nkle, REZ               |
|           31 |      311 | 2024-06-16 | fnatic          | L   | 0.995      | -            | -                | -                | -         |   -24.00 | alex, isak, maxster, r1nkle, REZ               |
|           30 |      372 | 2024-06-14 | paiN            | W   | 0.983      | 0.548        | 0.476 (0.257)    | 0.763 (0.411)    | 1 (0.983) |     6.92 | alex, isak, maxster, r1nkle, REZ               |
|           29 |      380 | 2024-06-14 | 9z              | W   | 0.981      | 0.548        | 0.606 (0.326)    | 0.728 (0.391)    | 1 (0.981) |    10.72 | alex, isak, maxster, r1nkle, REZ               |
|           28 |      541 | 2024-06-09 | The MongolZ     | L   | 0.947      | -            | -                | -                | -         |    -6.72 | alex, isak, maxster, r1nkle, REZ               |
|           27 |      607 | 2024-06-08 | FURIA           | W   | 0.941      | 0.715        | 0.253 (0.170)    | 0.483 (0.325)    | 1 (0.941) |     9.26 | alex, isak, maxster, r1nkle, REZ               |
|           26 |      657 | 2024-06-07 | fnatic          | W   | 0.934      | 0.715        | 0.300 (0.201)    | 0.632 (0.422)    | 1 (0.934) |     7.14 | alex, isak, maxster, r1nkle, REZ               |
|           25 |      723 | 2024-06-06 | Sashi           | W   | 0.927      | 0.715        | 0.215 (0.143)    | 1.000 (0.663)    | 1 (0.927) |     2.20 | alex, isak, maxster, r1nkle, REZ               |
|           24 |      745 | 2024-06-06 | The MongolZ     | L   | 0.926      | -            | -                | -                | -         |    -6.29 | alex, isak, maxster, r1nkle, REZ               |
|           23 |      757 | 2024-06-06 | Astralis        | W   | 0.925      | 0.715        | 0.549 (0.363)    | 0.434 (0.287)    | 1 (0.925) |    21.16 | alex, isak, maxster, r1nkle, REZ               |
|           22 |      791 | 2024-06-05 | HEROIC          | W   | 0.920      | 0.715        | 0.333 (0.220)    | 0.448 (0.295)    | 1 (0.920) |    16.51 | alex, isak, maxster, r1nkle, REZ               |
|           21 |      808 | 2024-06-05 | ENCE            | W   | 0.919      | 0.715        | 0.212 (0.139)    | 0.377 (0.248)    | 1 (0.919) |     4.18 | alex, isak, maxster, r1nkle, REZ               |
|           20 |     1255 | 2024-05-19 | Sangal          | L   | 0.808      | -            | -                | -                | -         |   -24.33 | alex, isak, maxster, r1nkle, REZ               |
|           19 |     1281 | 2024-05-18 | Metizport       | L   | 0.801      | -            | -                | -                | -         |   -24.54 | alex, isak, maxster, r1nkle, REZ               |
|           18 |     1356 | 2024-05-16 | Sangal          | W   | 0.788      | 0.500        | 0.232 (0.091)    | 0.893 (0.352)    | -         |     0.79 | alex, isak, maxster, r1nkle, REZ               |
|           17 |     1674 | 2024-05-05 | FlyQuest        | L   | 0.712      | -            | -                | -                | -         |   -19.82 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           16 |     1681 | 2024-05-04 | HEROIC          | W   | 0.707      | 0.889        | 0.333 (0.210)    | 0.448 (0.282)    | 1 (0.707) |    11.42 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           15 |     1695 | 2024-05-03 | BOSS            | W   | 0.701      | -            | -                | -                | 1 (0.701) |     0.20 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           14 |     1723 | 2024-05-02 | PERA            | L   | 0.694      | -            | -                | -                | -         |   -21.52 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           13 |     1770 | 2024-04-30 | HEROIC          | L   | 0.680      | -            | -                | -                | -         |   -10.45 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           12 |     2079 | 2024-04-18 | brazylijski luz | L   | 0.600      | -            | -                | -                | -         |   -18.78 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|           11 |     2223 | 2024-04-12 | OG              | L   | 0.560      | -            | -                | -                | -         |   -17.06 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|           10 |     2249 | 2024-04-11 | BetBoom         | L   | 0.553      | -            | -                | -                | -         |   -12.99 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            9 |     2346 | 2024-04-09 | Gods Reign      | W   | 0.540      | -            | -                | -                | -         |     0.10 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            8 |     2476 | 2024-04-04 | Aurora          | L   | 0.507      | -            | -                | -                | -         |   -10.92 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            7 |     2484 | 2024-04-04 | Metizport       | W   | 0.507      | -            | -                | -                | -         |     0.20 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            6 |     2517 | 2024-04-03 | Aurora          | L   | 0.501      | -            | -                | -                | -         |   -11.19 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            5 |     2532 | 2024-04-03 | Sampi           | L   | 0.499      | -            | -                | -                | -         |   -15.58 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            4 |     2556 | 2024-04-02 | FAVBET          | W   | 0.494      | -            | -                | -                | -         |     0.06 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            3 |     2561 | 2024-04-02 | Monte           | W   | 0.493      | -            | -                | -                | -         |     0.28 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            2 |     2650 | 2024-03-27 | 500             | W   | 0.455      | -            | -                | -                | -         |     0.04 | alex, BluePho3nix, maxster, REZ, Silence       |
|            1 |     2656 | 2024-03-27 | Verdant         | W   | 0.454      | -            | -                | -                | -         |     0.07 | alex, BluePho3nix, maxster, REZ, Silence       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($84,183.98)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.34) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.996 | $7,000.00      | $6,970.43       |
| 2024-06-09 |      0.947 | $56,000.00     | $53,030.43      |
| 2024-05-12 |      0.760 | $12,000.00     | $9,122.94       |
| 2024-04-14 |      0.574 | $26,250.00     | $15,060.18      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
