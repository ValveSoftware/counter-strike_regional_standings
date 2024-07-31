### Roster Details<br />
Team Name: FORZE<br />
Roster: NickelBack, SELLTER, shalfey, smooya, tN1R<br />
Global Rank: [71](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [51]( ../standings_europe.md)<br />
<br />
Final Rank Value:  950.7<br />
<br />
Final Rank Value (950.7) = Starting Rank Value (897.6) + Head To Head Adjustments (53.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.450[<sup>1</sup>](#table2)
- Bounty Collected: 0.386[<sup>2</sup>](#table1)
- Opponent Network: 0.060[<sup>2</sup>](#table1)
- LAN Wins: 0.068[<sup>2</sup>](#table1)

The average of these factors is 0.241<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 897.6
- 400 + ( ( 0.241 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 897.6


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
|           30 |     2216 | 2024-05-04 | Monte           | L   | 0.612      | -            | -                | -                | -         |    -7.86 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           29 |     2247 | 2024-05-02 | GamerLegion     | L   | 0.600      | -            | -                | -                | -         |    -5.01 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           28 |     2274 | 2024-05-01 | FURIA           | W   | 0.593      | 0.889        | 0.286 (0.151)    | 0.495 (0.261)    | 1 (0.593) |    18.33 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           27 |     2296 | 2024-04-30 | Monte           | L   | 0.586      | -            | -                | -                | -         |    -7.51 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           26 |     2750 | 2024-04-12 | BIG             | L   | 0.466      | -            | -                | -                | -         |    -2.53 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           25 |     2783 | 2024-04-11 | Aurora          | L   | 0.458      | -            | -                | -                | -         |    -0.29 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           24 |     2815 | 2024-04-10 | TSM             | W   | 0.453      | -            | -                | -                | 0 (0.000) |     2.65 | kelieN, SELLTER, shalfey, spirit, tN1R     |
|           23 |     2867 | 2024-04-09 | brazylijski luz | W   | 0.447      | 0.500        | 0.008 (0.002)    | 0.264 (0.059)    | 0 (0.000) |     4.36 | kelieN, SELLTER, shalfey, spirit, tN1R     |
|           22 |     2907 | 2024-04-08 | ENCE            | W   | 0.439      | 0.684        | 0.175 (0.052)    | 0.404 (0.121)    | 0 (0.000) |    13.14 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           21 |     3184 | 2024-03-27 | 500             | L   | 0.359      | -            | -                | -                | -         |    -8.73 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           20 |     3215 | 2024-03-26 | Apeks           | W   | 0.352      | 0.500        | 0.030 (0.005)    | 0.176 (0.031)    | 0 (0.000) |     5.43 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           19 |     3220 | 2024-03-25 | B8              | L   | 0.346      | -            | -                | -                | -         |    -3.16 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           18 |     3225 | 2024-03-24 | BetBoom         | W   | 0.339      | 0.143        | 0.259 (0.013)    | 0.554 (0.027)    | 0 (0.000) |    10.06 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           17 |     3237 | 2024-03-23 | VP.Prodigy      | W   | 0.332      | 0.143        | -                | 0.406 (0.019)    | 0 (0.000) |     4.47 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           16 |     3251 | 2024-03-22 | ex-Preasy       | W   | 0.325      | -            | -                | -                | 0 (0.000) |     3.82 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           15 |     3272 | 2024-03-21 | PARIVISION      | L   | 0.319      | -            | -                | -                | -         |    -2.71 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           14 |     3298 | 2024-03-20 | NAVI Junior     | W   | 0.312      | -            | -                | -                | 0 (0.000) |     1.03 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           13 |     3654 | 2024-03-05 | KOI             | L   | 0.214      | -            | -                | -                | -         |    -1.81 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           12 |     3659 | 2024-03-05 | AMKAL           | W   | 0.213      | 0.143        | 0.132 (0.004)    | 0.484 (0.015)    | 0 (0.000) |     5.26 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           11 |     3667 | 2024-03-05 | 3DMAX           | W   | 0.213      | 0.143        | 0.504 (0.015)    | 1.000 (0.030)    | -         |     6.61 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           10 |     3749 | 2024-03-01 | Aurora          | L   | 0.187      | -            | -                | -                | -         |    -0.08 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            9 |     3763 | 2024-02-29 | 9 Pandas        | W   | 0.180      | 0.143        | 0.083 (0.002)    | 0.579 (0.015)    | -         |     3.65 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            8 |     3776 | 2024-02-28 | KOI             | W   | 0.173      | -            | -                | -                | -         |     4.13 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            7 |     3782 | 2024-02-28 | Aurora          | W   | 0.172      | 0.143        | 0.433 (0.011)    | 0.800 (0.020)    | -         |     5.36 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            6 |     3796 | 2024-02-27 | V1dar           | W   | 0.166      | -            | -                | -                | -         |     0.58 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            5 |     3802 | 2024-02-27 | ARCRED          | W   | 0.166      | -            | -                | -                | -         |     2.33 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            4 |     4200 | 2024-02-09 | Sashi           | L   | 0.046      | -            | -                | -                | -         |    -0.26 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            3 |     4202 | 2024-02-09 | RUBY            | W   | 0.046      | -            | -                | -                | -         |     0.80 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            2 |     4213 | 2024-02-08 | BetBoom         | W   | 0.040      | 0.143        | 0.259 (0.001)    | -                | -         |     1.21 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            1 |     4217 | 2024-02-08 | Sashi           | L   | 0.039      | -            | -                | -                | -         |    -0.22 | gokushima, r3salt, SELLTER, shalfey, tN1R  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($19,798.62)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.853 | $3,000.00      | $2,559.28       |
| 2024-05-12 |      0.666 | $7,000.00      | $4,660.13       |
| 2024-04-14 |      0.479 | $26,250.00     | $12,579.21      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
