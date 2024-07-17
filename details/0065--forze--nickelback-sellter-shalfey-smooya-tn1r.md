### Roster Details<br />
Team Name: FORZE<br />
Roster: NickelBack, SELLTER, shalfey, smooya, tN1R<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [65](../standings_global.md)<br />
Regional Rank: [47]( ../standings_europe.md)<br />
Final Rank Value:  1032.5<br />
<br />
Final Rank Value (1032.5) = Starting Rank Value (964.0) + Head To Head Adjustments (68.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.494[<sup>1</sup>](#table2)
- Bounty Collected: 0.401[<sup>2</sup>](#table1)
- Opponent Network: 0.076[<sup>2</sup>](#table1)
- LAN Wins: 0.080[<sup>2</sup>](#table1)

The average of these factors is 0.263<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 964.0
- 400 + ( ( 0.263 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 964.0


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
|           30 |     1686 | 2024-05-04 | Monte           | L   | 0.706      | -            | -                | -                | -         |    -8.47 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           29 |     1717 | 2024-05-02 | GamerLegion     | L   | 0.694      | -            | -                | -                | -         |    -5.36 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           28 |     1744 | 2024-05-01 | FURIA           | W   | 0.687      | 0.889        | 0.253 (0.155)    | 0.483 (0.295)    | 1 (0.687) |    20.68 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           27 |     1766 | 2024-04-30 | Monte           | L   | 0.681      | -            | -                | -                | -         |    -8.04 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           26 |     2220 | 2024-04-12 | BIG             | L   | 0.561      | -            | -                | -                | -         |    -2.28 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           25 |     2253 | 2024-04-11 | Aurora          | L   | 0.553      | -            | -                | -                | -         |    -0.62 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           24 |     2285 | 2024-04-10 | TSM             | W   | 0.548      | -            | -                | -                | 0 (0.000) |     2.85 | kelieN, SELLTER, shalfey, spirit, tN1R     |
|           23 |     2337 | 2024-04-09 | brazylijski luz | W   | 0.541      | 0.500        | -                | 0.282 (0.076)    | 0 (0.000) |     4.51 | kelieN, SELLTER, shalfey, spirit, tN1R     |
|           22 |     2377 | 2024-04-08 | ENCE            | W   | 0.533      | 0.684        | 0.212 (0.077)    | 0.377 (0.137)    | 0 (0.000) |    15.36 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           21 |     2654 | 2024-03-27 | 500             | L   | 0.454      | -            | -                | -                | -         |   -11.53 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           20 |     2685 | 2024-03-26 | Apeks           | W   | 0.446      | 0.500        | 0.052 (0.012)    | 0.255 (0.057)    | 0 (0.000) |     7.58 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           19 |     2690 | 2024-03-25 | B8              | L   | 0.441      | -            | -                | -                | -         |    -4.34 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           18 |     2695 | 2024-03-24 | BetBoom         | W   | 0.433      | 0.143        | 0.403 (0.025)    | 0.704 (0.044)    | 0 (0.000) |    13.18 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           17 |     2707 | 2024-03-23 | VP.Prodigy      | W   | 0.426      | 0.143        | -                | 0.498 (0.030)    | 0 (0.000) |     5.06 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           16 |     2721 | 2024-03-22 | ex-Preasy       | W   | 0.420      | -            | -                | -                | 0 (0.000) |     5.09 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           15 |     2742 | 2024-03-21 | PARIVISION      | L   | 0.414      | -            | -                | -                | -         |    -6.66 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           14 |     2768 | 2024-03-20 | NAVI Junior     | W   | 0.407      | -            | -                | -                | 0 (0.000) |     0.97 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           13 |     3124 | 2024-03-05 | KOI             | L   | 0.308      | -            | -                | -                | -         |    -2.47 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           12 |     3129 | 2024-03-05 | AMKAL           | W   | 0.307      | 0.143        | 0.134 (0.006)    | 0.523 (0.023)    | 0 (0.000) |     6.40 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           11 |     3137 | 2024-03-05 | 3DMAX           | W   | 0.307      | 0.143        | 0.209 (0.009)    | 1.000 (0.044)    | -         |     7.69 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           10 |     3219 | 2024-03-01 | Aurora          | L   | 0.281      | -            | -                | -                | -         |    -0.20 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            9 |     3233 | 2024-02-29 | 9 Pandas        | W   | 0.275      | 0.143        | 0.126 (0.005)    | 0.591 (0.023)    | -         |     5.83 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            8 |     3246 | 2024-02-28 | KOI             | W   | 0.268      | 0.143        | 0.091 (0.003)    | -                | -         |     6.57 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            7 |     3252 | 2024-02-28 | Aurora          | W   | 0.267      | 0.143        | 0.514 (0.020)    | 0.813 (0.031)    | -         |     8.23 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            6 |     3266 | 2024-02-27 | V1dar           | W   | 0.261      | -            | -                | -                | -         |     0.69 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            5 |     3272 | 2024-02-27 | ARCRED          | W   | 0.260      | -            | -                | -                | -         |     3.37 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            4 |     3670 | 2024-02-09 | Sashi           | L   | 0.141      | -            | -                | -                | -         |    -1.18 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            3 |     3672 | 2024-02-09 | RUBY            | W   | 0.140      | -            | -                | -                | -         |     2.46 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            2 |     3683 | 2024-02-08 | BetBoom         | W   | 0.135      | 0.143        | 0.403 (0.008)    | -                | -         |     4.15 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            1 |     3687 | 2024-02-08 | Sashi           | L   | 0.133      | -            | -                | -                | -         |    -1.09 | gokushima, r3salt, SELLTER, shalfey, tN1R  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($23,224.71)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.948 | $3,000.00      | $2,842.82       |
| 2024-05-12 |      0.760 | $7,000.00      | $5,321.72       |
| 2024-04-14 |      0.574 | $26,250.00     | $15,060.18      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
