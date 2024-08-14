### Roster Details<br />
Team Name: FORZE<br />
Roster: NickelBack, SELLTER, shalfey, smooya, tN1R<br />
Global Rank: [91](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [66]( ../standings_europe.md)<br />
<br />
Final Rank Value:  885.3<br />
<br />
Final Rank Value (885.3) = Starting Rank Value (847.6) + Head To Head Adjustments (37.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.437[<sup>1</sup>](#table2)
- Bounty Collected: 0.370[<sup>2</sup>](#table1)
- Opponent Network: 0.044[<sup>2</sup>](#table1)
- LAN Wins: 0.056[<sup>2</sup>](#table1)

The average of these factors is 0.227<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 847.6
- 400 + ( ( 0.227 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 847.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |     2697 | 2024-05-04 | Monte           | L   | 0.518      | -            | -                | -                | -         |    -4.97 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           25 |     2728 | 2024-05-02 | GamerLegion     | L   | 0.507      | -            | -                | -                | -         |    -4.42 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           24 |     2755 | 2024-05-01 | FURIA           | W   | 0.500      | 0.889        | 0.301 (0.134)    | 0.506 (0.225)    | 1 (0.500) |    15.50 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           23 |     2777 | 2024-04-30 | Monte           | L   | 0.493      | -            | -                | -                | -         |    -4.65 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           22 |     3231 | 2024-04-12 | BIG             | L   | 0.373      | -            | -                | -                | -         |    -1.11 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           21 |     3264 | 2024-04-11 | Aurora          | L   | 0.365      | -            | -                | -                | -         |    -0.26 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           20 |     3296 | 2024-04-10 | TSM             | W   | 0.360      | 0.500        | 0.005 (0.001)    | 0.035 (0.006)    | 0 (0.000) |     2.57 | kelieN, SELLTER, shalfey, spirit, tN1R     |
|           19 |     3348 | 2024-04-09 | brazylijski luz | W   | 0.353      | 0.500        | 0.007 (0.001)    | 0.229 (0.040)    | 0 (0.000) |     4.00 | kelieN, SELLTER, shalfey, spirit, tN1R     |
|           18 |     3388 | 2024-04-08 | ENCE            | W   | 0.345      | 0.684        | 0.160 (0.038)    | 0.393 (0.093)    | 0 (0.000) |    10.30 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           17 |     3665 | 2024-03-27 | 500             | L   | 0.266      | -            | -                | -                | -         |    -6.17 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           16 |     3696 | 2024-03-26 | Apeks           | W   | 0.258      | 0.500        | 0.023 (0.003)    | 0.135 (0.017)    | 0 (0.000) |     3.74 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           15 |     3701 | 2024-03-25 | B8              | L   | 0.253      | -            | -                | -                | -         |    -2.14 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           14 |     3706 | 2024-03-24 | BetBoom         | W   | 0.245      | 0.143        | 0.223 (0.008)    | 0.456 (0.016)    | 0 (0.000) |     7.16 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           13 |     3718 | 2024-03-23 | VP.Prodigy      | W   | 0.239      | 0.143        | 0.024 (0.001)    | 0.350 (0.012)    | 0 (0.000) |     3.61 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           12 |     3732 | 2024-03-22 | ex-Preasy       | W   | 0.232      | -            | -                | -                | 0 (0.000) |     2.66 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           11 |     3753 | 2024-03-21 | PARIVISION      | L   | 0.226      | -            | -                | -                | -         |    -1.37 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           10 |     3779 | 2024-03-20 | NAVI Junior     | W   | 0.219      | -            | -                | -                | 0 (0.000) |     2.02 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            9 |     4135 | 2024-03-05 | KOI             | L   | 0.120      | -            | -                | -                | -         |    -1.09 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            8 |     4140 | 2024-03-05 | AMKAL           | W   | 0.120      | -            | -                | -                | 0 (0.000) |     0.95 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            7 |     4148 | 2024-03-05 | 3DMAX           | W   | 0.119      | 0.143        | 0.508 (0.009)    | 1.000 (0.017)    | -         |     3.71 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            6 |     4230 | 2024-03-01 | Aurora          | L   | 0.094      | -            | -                | -                | -         |    -0.05 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            5 |     4244 | 2024-02-29 | 9 Pandas        | W   | 0.087      | 0.143        | 0.075 (0.001)    | 0.717 (0.009)    | -         |     1.86 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            4 |     4257 | 2024-02-28 | KOI             | W   | 0.080      | -            | -                | -                | -         |     1.83 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            3 |     4263 | 2024-02-28 | Aurora          | W   | 0.079      | 0.143        | 0.387 (0.004)    | 0.737 (0.008)    | -         |     2.44 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            2 |     4277 | 2024-02-27 | V1dar           | W   | 0.073      | -            | -                | -                | -         |     0.30 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            1 |     4283 | 2024-02-27 | ARCRED          | W   | 0.073      | -            | -                | -                | -         |     1.29 | gokushima, r3salt, SELLTER, shalfey, tN1R  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,418.54)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.760 | $3,000.00      | $2,279.55       |
| 2024-05-12 |      0.572 | $7,000.00      | $4,007.42       |
| 2024-04-14 |      0.386 | $26,250.00     | $10,131.57      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
