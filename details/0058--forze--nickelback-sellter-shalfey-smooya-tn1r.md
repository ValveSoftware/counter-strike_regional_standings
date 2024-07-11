### Roster Details<br />
Team Name: FORZE<br />
Roster: NickelBack, SELLTER, shalfey, smooya, tN1R<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [58](../standings_global.md)<br />
Regional Rank: [42]( ../standings_europe.md)<br />
Final Rank Value:  1047.2<br />
<br />
Final Rank Value (1047.2) = Starting Rank Value (965.3) + Head To Head Adjustments (81.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.495[<sup>1</sup>](#table2)
- Bounty Collected: 0.407[<sup>2</sup>](#table1)
- Opponent Network: 0.086[<sup>2</sup>](#table1)
- LAN Wins: 0.084[<sup>2</sup>](#table1)

The average of these factors is 0.268<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 965.3
- 400 + ( ( 0.268 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 965.3


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
|           30 |     1522 | 2024-05-04 | Monte           | L   | 0.746      | -            | -                | -                | -         |    -6.11 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           29 |     1553 | 2024-05-02 | GamerLegion     | L   | 0.734      | -            | -                | -                | -         |    -5.81 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           28 |     1580 | 2024-05-01 | FURIA           | W   | 0.727      | 0.889        | 0.253 (0.164)    | 0.509 (0.329)    | 1 (0.727) |    21.84 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           27 |     1602 | 2024-04-30 | Monte           | L   | 0.720      | -            | -                | -                | -         |    -5.59 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           26 |     2056 | 2024-04-12 | BIG             | L   | 0.600      | -            | -                | -                | -         |    -2.35 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           25 |     2089 | 2024-04-11 | Aurora          | L   | 0.592      | -            | -                | -                | -         |    -0.72 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           24 |     2121 | 2024-04-10 | TSM             | W   | 0.587      | 0.500        | -                | 0.095 (0.028)    | 0 (0.000) |     3.00 | kelieN, SELLTER, shalfey, spirit, tN1R     |
|           23 |     2173 | 2024-04-09 | brazylijski luz | W   | 0.581      | 0.500        | -                | 0.281 (0.081)    | 0 (0.000) |     4.28 | kelieN, SELLTER, shalfey, spirit, tN1R     |
|           22 |     2213 | 2024-04-08 | ENCE            | W   | 0.573      | 0.684        | 0.216 (0.085)    | 0.399 (0.156)    | 0 (0.000) |    16.69 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           21 |     2490 | 2024-03-27 | 500             | L   | 0.494      | -            | -                | -                | -         |   -12.57 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           20 |     2521 | 2024-03-26 | Apeks           | W   | 0.486      | 0.500        | 0.054 (0.013)    | 0.280 (0.068)    | 0 (0.000) |     8.47 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           19 |     2526 | 2024-03-25 | B8              | L   | 0.480      | -            | -                | -                | -         |    -4.83 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           18 |     2531 | 2024-03-24 | BetBoom         | W   | 0.473      | 0.143        | 0.406 (0.027)    | 0.745 (0.050)    | 0 (0.000) |    14.39 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           17 |     2543 | 2024-03-23 | VP.Prodigy      | W   | 0.466      | 0.143        | -                | 0.519 (0.035)    | 0 (0.000) |     5.30 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           16 |     2557 | 2024-03-22 | ex-Preasy       | W   | 0.459      | -            | -                | -                | 0 (0.000) |     5.71 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           15 |     2578 | 2024-03-21 | PARIVISION      | L   | 0.453      | -            | -                | -                | -         |    -7.18 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           14 |     2604 | 2024-03-20 | NAVI Junior     | W   | 0.447      | -            | -                | -                | 0 (0.000) |     0.98 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           13 |     2960 | 2024-03-05 | KOI             | L   | 0.348      | -            | -                | -                | -         |    -2.97 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           12 |     2965 | 2024-03-05 | AMKAL           | W   | 0.347      | 0.143        | 0.135 (0.007)    | -                | 0 (0.000) |     7.38 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           11 |     2973 | 2024-03-05 | 3DMAX           | W   | 0.347      | 0.143        | 0.205 (0.010)    | 1.000 (0.050)    | -         |     8.62 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           10 |     3055 | 2024-03-01 | Aurora          | L   | 0.321      | -            | -                | -                | -         |    -0.24 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            9 |     3069 | 2024-02-29 | 9 Pandas        | W   | 0.314      | 0.143        | 0.125 (0.006)    | 0.625 (0.028)    | -         |     6.71 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            8 |     3082 | 2024-02-28 | KOI             | W   | 0.307      | 0.143        | 0.090 (0.004)    | -                | -         |     7.43 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            7 |     3088 | 2024-02-28 | Aurora          | W   | 0.306      | 0.143        | 0.518 (0.023)    | 0.853 (0.037)    | -         |     9.45 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            6 |     3102 | 2024-02-27 | V1dar           | W   | 0.300      | -            | -                | -                | -         |     0.79 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            5 |     3108 | 2024-02-27 | ARCRED          | W   | 0.300      | -            | -                | -                | -         |     3.75 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            4 |     3506 | 2024-02-09 | Sashi           | L   | 0.180      | -            | -                | -                | -         |    -1.53 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            3 |     3508 | 2024-02-09 | RUBY            | W   | 0.180      | -            | -                | -                | -         |     3.02 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            2 |     3519 | 2024-02-08 | BetBoom         | W   | 0.174      | 0.143        | 0.406 (0.010)    | -                | -         |     5.38 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            1 |     3523 | 2024-02-08 | Sashi           | L   | 0.173      | -            | -                | -                | -         |    -1.44 | gokushima, r3salt, SELLTER, shalfey, tN1R  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24,660.58)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.987 | $3,000.00      | $2,961.65       |
| 2024-05-12 |      0.800 | $7,000.00      | $5,598.99       |
| 2024-04-14 |      0.613 | $26,250.00     | $16,099.95      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
