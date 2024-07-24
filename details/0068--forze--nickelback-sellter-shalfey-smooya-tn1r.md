### Roster Details<br />
Team Name: FORZE<br />
Roster: NickelBack, SELLTER, shalfey, smooya, tN1R<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [68](../standings_global.md)<br />
Regional Rank: [47]( ../standings_europe.md)<br />
Final Rank Value:  977.3<br />
<br />
Final Rank Value (977.3) = Starting Rank Value (917.7) + Head To Head Adjustments (59.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.474[<sup>1</sup>](#table2)
- Bounty Collected: 0.401[<sup>2</sup>](#table1)
- Opponent Network: 0.072[<sup>2</sup>](#table1)
- LAN Wins: 0.076[<sup>2</sup>](#table1)

The average of these factors is 0.256<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 917.7
- 400 + ( ( 0.256 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 917.7


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
|           30 |     1974 | 2024-05-04 | Monte           | L   | 0.659      | -            | -                | -                | -         |    -8.27 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           29 |     2005 | 2024-05-02 | GamerLegion     | L   | 0.647      | -            | -                | -                | -         |    -5.52 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           28 |     2032 | 2024-05-01 | FURIA           | W   | 0.640      | 0.889        | 0.355 (0.202)    | 0.563 (0.320)    | 1 (0.640) |    19.81 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           27 |     2054 | 2024-04-30 | Monte           | L   | 0.634      | -            | -                | -                | -         |    -7.86 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           26 |     2508 | 2024-04-12 | BIG             | L   | 0.513      | -            | -                | -                | -         |    -2.47 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           25 |     2541 | 2024-04-11 | Aurora          | L   | 0.506      | -            | -                | -                | -         |    -0.60 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           24 |     2573 | 2024-04-10 | TSM             | W   | 0.501      | -            | -                | -                | 0 (0.000) |     2.78 | kelieN, SELLTER, shalfey, spirit, tN1R     |
|           23 |     2625 | 2024-04-09 | brazylijski luz | W   | 0.494      | 0.500        | 0.010 (0.002)    | 0.300 (0.074)    | 0 (0.000) |     4.61 | kelieN, SELLTER, shalfey, spirit, tN1R     |
|           22 |     2665 | 2024-04-08 | ENCE            | W   | 0.486      | 0.684        | 0.171 (0.057)    | 0.380 (0.126)    | 0 (0.000) |    14.06 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           21 |     2942 | 2024-03-27 | 500             | L   | 0.407      | -            | -                | -                | -         |   -10.06 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           20 |     2973 | 2024-03-26 | Apeks           | W   | 0.399      | 0.500        | 0.041 (0.008)    | 0.219 (0.044)    | 0 (0.000) |     6.34 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           19 |     2978 | 2024-03-25 | B8              | L   | 0.393      | -            | -                | -                | -         |    -4.01 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           18 |     2983 | 2024-03-24 | BetBoom         | W   | 0.386      | 0.143        | 0.333 (0.018)    | 0.642 (0.035)    | 0 (0.000) |    11.57 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           17 |     2995 | 2024-03-23 | VP.Prodigy      | W   | 0.379      | 0.143        | -                | 0.462 (0.025)    | 0 (0.000) |     4.59 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           16 |     3009 | 2024-03-22 | ex-Preasy       | W   | 0.372      | -            | -                | -                | 0 (0.000) |     4.49 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           15 |     3030 | 2024-03-21 | PARIVISION      | L   | 0.366      | -            | -                | -                | -         |    -4.18 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           14 |     3056 | 2024-03-20 | NAVI Junior     | W   | 0.360      | -            | -                | -                | 0 (0.000) |     1.05 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           13 |     3412 | 2024-03-05 | KOI             | L   | 0.261      | -            | -                | -                | -         |    -2.34 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           12 |     3417 | 2024-03-05 | AMKAL           | W   | 0.260      | 0.143        | 0.111 (0.004)    | 0.515 (0.019)    | 0 (0.000) |     5.74 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           11 |     3425 | 2024-03-05 | 3DMAX           | W   | 0.260      | 0.143        | 0.175 (0.007)    | 1.000 (0.037)    | -         |     6.84 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           10 |     3507 | 2024-03-01 | Aurora          | L   | 0.234      | -            | -                | -                | -         |    -0.18 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            9 |     3521 | 2024-02-29 | 9 Pandas        | W   | 0.227      | 0.143        | 0.105 (0.003)    | 0.578 (0.019)    | -         |     4.69 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            8 |     3534 | 2024-02-28 | KOI             | W   | 0.221      | -            | -                | -                | -         |     5.18 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            7 |     3540 | 2024-02-28 | Aurora          | W   | 0.219      | 0.143        | 0.423 (0.013)    | 0.783 (0.025)    | -         |     6.76 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            6 |     3554 | 2024-02-27 | V1dar           | W   | 0.214      | -            | -                | -                | -         |     0.69 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            5 |     3560 | 2024-02-27 | ARCRED          | W   | 0.213      | -            | -                | -                | -         |     2.77 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            4 |     3958 | 2024-02-09 | Sashi           | L   | 0.094      | -            | -                | -                | -         |    -0.60 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            3 |     3960 | 2024-02-09 | RUBY            | W   | 0.093      | -            | -                | -                | -         |     1.62 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            2 |     3971 | 2024-02-08 | BetBoom         | W   | 0.087      | 0.143        | 0.333 (0.004)    | -                | -         |     2.66 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            1 |     3975 | 2024-02-08 | Sashi           | L   | 0.086      | -            | -                | -                | -         |    -0.54 | gokushima, r3salt, SELLTER, shalfey, tN1R  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,512.80)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.900 | $3,000.00      | $2,701.14       |
| 2024-05-12 |      0.713 | $7,000.00      | $4,991.14       |
| 2024-04-14 |      0.526 | $26,250.00     | $13,820.52      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
