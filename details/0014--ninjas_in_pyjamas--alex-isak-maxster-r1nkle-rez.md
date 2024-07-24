### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: alex, isak, maxster, r1nkle, REZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [14](../standings_global.md)<br />
Regional Rank: [11]( ../standings_europe.md)<br />
Final Rank Value:  1581.1<br />
<br />
Final Rank Value (1581.1) = Starting Rank Value (1718.3) + Head To Head Adjustments (-137.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.649[<sup>1</sup>](#table2)
- Bounty Collected: 0.582[<sup>2</sup>](#table1)
- Opponent Network: 0.374[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.651<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1718.3
- 400 + ( ( 0.651 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1718.3


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
|           34 |      131 | 2024-07-20 | Passion UA      | L   | 1.000      | -            | -                | -                | -         |   -29.89 | alex, isak, maxster, r1nkle, REZ               |
|           33 |      205 | 2024-07-18 | MOUZ NXT        | W   | 1.000      | 0.500        | 0.169 (0.085)    | 1.000 (0.500)    | -         |     1.48 | alex, isak, maxster, r1nkle, REZ               |
|           32 |      337 | 2024-07-16 | Nexus           | W   | 1.000      | 0.500        | -                | 0.480 (0.240)    | -         |     0.27 | alex, isak, maxster, r1nkle, REZ               |
|           31 |      599 | 2024-06-16 | fnatic          | L   | 0.948      | -            | -                | -                | -         |   -20.86 | alex, isak, maxster, r1nkle, REZ               |
|           30 |      660 | 2024-06-14 | paiN            | W   | 0.935      | 0.548        | 0.393 (0.202)    | 0.825 (0.423)    | 1 (0.935) |     6.75 | alex, isak, maxster, r1nkle, REZ               |
|           29 |      668 | 2024-06-14 | 9z              | W   | 0.934      | 0.548        | 0.511 (0.261)    | 0.671 (0.343)    | 1 (0.934) |    10.03 | alex, isak, maxster, r1nkle, REZ               |
|           28 |      829 | 2024-06-09 | The MongolZ     | L   | 0.900      | -            | -                | -                | -         |    -5.74 | alex, isak, maxster, r1nkle, REZ               |
|           27 |      895 | 2024-06-08 | FURIA           | W   | 0.893      | 0.715        | 0.355 (0.227)    | 0.563 (0.360)    | 1 (0.893) |    14.98 | alex, isak, maxster, r1nkle, REZ               |
|           26 |      945 | 2024-06-07 | fnatic          | W   | 0.887      | 0.715        | 0.428 (0.272)    | 0.666 (0.423)    | 1 (0.887) |     9.27 | alex, isak, maxster, r1nkle, REZ               |
|           25 |     1011 | 2024-06-06 | Sashi           | W   | 0.880      | 0.715        | 0.234 (0.147)    | 1.000 (0.630)    | 1 (0.880) |     2.89 | alex, isak, maxster, r1nkle, REZ               |
|           24 |     1033 | 2024-06-06 | The MongolZ     | L   | 0.879      | -            | -                | -                | -         |    -4.98 | alex, isak, maxster, r1nkle, REZ               |
|           23 |     1045 | 2024-06-06 | Astralis        | W   | 0.878      | 0.715        | 0.457 (0.287)    | 0.398 (0.250)    | 1 (0.878) |    18.50 | alex, isak, maxster, r1nkle, REZ               |
|           22 |     1079 | 2024-06-05 | HEROIC          | W   | 0.873      | 0.715        | 0.272 (0.170)    | 0.404 (0.252)    | 1 (0.873) |    15.06 | alex, isak, maxster, r1nkle, REZ               |
|           21 |     1096 | 2024-06-05 | ENCE            | W   | 0.872      | 0.715        | 0.171 (0.107)    | -                | 1 (0.872) |     5.02 | alex, isak, maxster, r1nkle, REZ               |
|           20 |     1543 | 2024-05-19 | Sangal          | L   | 0.761      | -            | -                | -                | -         |   -22.61 | alex, isak, maxster, r1nkle, REZ               |
|           19 |     1569 | 2024-05-18 | Metizport       | L   | 0.754      | -            | -                | -                | -         |   -22.91 | alex, isak, maxster, r1nkle, REZ               |
|           18 |     1644 | 2024-05-16 | Sangal          | W   | 0.740      | 0.500        | -                | 0.860 (0.318)    | -         |     0.98 | alex, isak, maxster, r1nkle, REZ               |
|           17 |     1962 | 2024-05-05 | FlyQuest        | L   | 0.665      | -            | -                | -                | -         |   -18.37 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           16 |     1969 | 2024-05-04 | HEROIC          | W   | 0.660      | 0.889        | 0.272 (0.160)    | -                | 1 (0.660) |     9.92 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           15 |     1983 | 2024-05-03 | BOSS            | W   | 0.654      | -            | -                | -                | 1 (0.654) |     0.28 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           14 |     2011 | 2024-05-02 | PERA            | L   | 0.646      | -            | -                | -                | -         |   -19.96 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           13 |     2058 | 2024-04-30 | HEROIC          | L   | 0.633      | -            | -                | -                | -         |   -10.52 | alex, BluePho3nix, maxster, r1nkle, xKacpersky |
|           12 |     2367 | 2024-04-18 | brazylijski luz | L   | 0.553      | -            | -                | -                | -         |   -17.25 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|           11 |     2511 | 2024-04-12 | OG              | L   | 0.512      | -            | -                | -                | -         |   -15.60 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|           10 |     2537 | 2024-04-11 | BetBoom         | L   | 0.506      | -            | -                | -                | -         |   -12.14 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            9 |     2634 | 2024-04-09 | Gods Reign      | W   | 0.493      | -            | -                | -                | -         |     0.12 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            8 |     2764 | 2024-04-04 | Aurora          | L   | 0.460      | -            | -                | -                | -         |    -9.27 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            7 |     2772 | 2024-04-04 | Metizport       | W   | 0.459      | -            | -                | -                | -         |     0.24 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            6 |     2805 | 2024-04-03 | Aurora          | L   | 0.453      | -            | -                | -                | -         |    -9.48 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            5 |     2820 | 2024-04-03 | Sampi           | L   | 0.452      | -            | -                | -                | -         |   -14.06 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            4 |     2844 | 2024-04-02 | FAVBET          | W   | 0.447      | -            | -                | -                | -         |     0.09 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            3 |     2849 | 2024-04-02 | Monte           | W   | 0.446      | -            | -                | -                | -         |     0.30 | alex, BluePho3nix, maxster, r1nkle, REZ        |
|            2 |     2938 | 2024-03-27 | 500             | W   | 0.407      | -            | -                | -                | -         |     0.06 | alex, BluePho3nix, maxster, REZ, Silence       |
|            1 |     2944 | 2024-03-27 | Verdant         | W   | 0.407      | -            | -                | -                | -         |     0.17 | alex, BluePho3nix, maxster, REZ, Silence       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($79,402.43)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.29) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.949 | $7,000.00      | $6,639.86       |
| 2024-06-09 |      0.900 | $56,000.00     | $50,385.82      |
| 2024-05-12 |      0.713 | $12,000.00     | $8,556.24       |
| 2024-04-14 |      0.526 | $26,250.00     | $13,820.52      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
