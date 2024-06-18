### Roster Details<br />
Team Name: Insilio<br />
Roster: faydett, FpSSS, Pipw, Polt, sugaR<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [59](../standings_global.md)<br />
Regional Rank: [43]( ../standings_europe.md)<br />
Final Rank Value:  1065.3<br />
<br />
Final Rank Value (1065.3) = Starting Rank Value (940.8) + Head To Head Adjustments (124.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.401[<sup>1</sup>](#table2)
- Bounty Collected: 0.405[<sup>2</sup>](#table1)
- Opponent Network: 0.259[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.266<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 940.8
- 400 + ( ( 0.266 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 940.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           46 |      192 | 2024-06-10 | ARCRED            | W   | 1.000      | 0.372        | 0.048 (0.018)    | -                | 0 (0.000) |    11.02 | faydett, FpSSS, Pipw, Polt, sugaR |
|           45 |      240 | 2024-06-09 | RUBY              | W   | 1.000      | 0.372        | 0.121 (0.045)    | 0.574 (0.214)    | 0 (0.000) |    11.37 | faydett, FpSSS, Pipw, Polt, sugaR |
|           44 |      294 | 2024-06-08 | Zero Tenacity     | W   | 1.000      | 0.372        | 0.153 (0.057)    | 1.000 (0.372)    | 0 (0.000) |    19.61 | faydett, FpSSS, Pipw, Polt, sugaR |
|           43 |      361 | 2024-06-07 | Aurora Young Blud | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.92 | faydett, FpSSS, Pipw, Polt, sugaR |
|           42 |      563 | 2024-06-03 | RUBY              | L   | 1.000      | -            | -                | -                | -         |   -16.77 | faydett, FpSSS, Pipw, Polt, sugaR |
|           41 |      622 | 2024-06-01 | 1WIN              | W   | 1.000      | 0.372        | 0.041 (0.015)    | 0.592 (0.220)    | 0 (0.000) |    19.21 | faydett, FpSSS, Pipw, Polt, sugaR |
|           40 |      673 | 2024-05-30 | VP.Prodigy        | W   | 1.000      | 0.372        | 0.033 (0.012)    | 0.518 (0.193)    | 0 (0.000) |    13.72 | faydett, FpSSS, Pipw, Polt, sugaR |
|           39 |     1331 | 2024-05-07 | RUBY              | L   | 0.922      | -            | -                | -                | -         |   -15.99 | faydett, FpSSS, Pipw, Polt, sugaR |
|           38 |     1350 | 2024-05-06 | Zero Tenacity     | L   | 0.915      | -            | -                | -                | -         |   -13.16 | faydett, FpSSS, Pipw, Polt, sugaR |
|           37 |     1354 | 2024-05-06 | BLEED             | L   | 0.914      | -            | -                | -                | -         |    -4.39 | faydett, FpSSS, Pipw, Polt, sugaR |
|           36 |     1400 | 2024-05-03 | Permitta          | W   | 0.895      | 0.435        | 0.039 (0.015)    | 0.885 (0.344)    | 0 (0.000) |    11.26 | faydett, FpSSS, Pipw, Polt, sugaR |
|           35 |     1412 | 2024-05-03 | BetBoom           | L   | 0.893      | -            | -                | -                | -         |    -1.55 | faydett, FpSSS, Pipw, Polt, sugaR |
|           34 |     1444 | 2024-05-01 | OG                | W   | 0.883      | 0.435        | 0.235 (0.090)    | -                | 0 (0.000) |    22.63 | faydett, FpSSS, Pipw, Polt, sugaR |
|           33 |     1455 | 2024-05-01 | Nexus             | W   | 0.881      | 0.435        | -                | 0.397 (0.152)    | 0 (0.000) |     9.13 | faydett, FpSSS, Pipw, Polt, sugaR |
|           32 |     1496 | 2024-04-29 | HAVU              | L   | 0.868      | -            | -                | -                | -         |   -22.33 | faydett, FpSSS, Pipw, Polt, sugaR |
|           31 |     1532 | 2024-04-27 | ex-Guild Eagles   | W   | 0.856      | -            | -                | -                | 0 (0.000) |    12.08 | faydett, FpSSS, Pipw, Polt, sugaR |
|           30 |     1539 | 2024-04-27 | Permitta          | W   | 0.855      | 0.396        | 0.039 (0.013)    | 0.885 (0.300)    | -         |    13.10 | faydett, FpSSS, Pipw, Polt, sugaR |
|           29 |     1561 | 2024-04-26 | ARCRED            | L   | 0.849      | -            | -                | -                | -         |   -17.62 | faydett, FpSSS, Pipw, Polt, sugaR |
|           28 |     1566 | 2024-04-26 | Enterprise        | W   | 0.848      | 0.396        | 0.046 (0.016)    | 0.575 (0.193)    | -         |    12.40 | faydett, FpSSS, Pipw, Polt, sugaR |
|           27 |     1600 | 2024-04-25 | MOUZ NXT          | W   | 0.840      | 0.435        | 0.158 (0.058)    | 1.000 (0.365)    | -         |    16.58 | faydett, FpSSS, Pipw, Polt, sugaR |
|           26 |     1626 | 2024-04-23 | EYEBALLERS        | W   | 0.829      | 0.435        | -                | 0.653 (0.235)    | -         |    10.40 | faydett, FpSSS, Pipw, Polt, sugaR |
|           25 |     1675 | 2024-04-21 | Permitta          | L   | 0.813      | -            | -                | -                | -         |   -12.34 | faydett, FpSSS, Pipw, Polt, sugaR |
|           24 |     2213 | 2024-04-03 | AMKAL             | L   | 0.696      | -            | -                | -                | -         |    -5.89 | faydett, FpSSS, Pipw, Polt, sugaR |
|           23 |     2254 | 2024-04-02 | ex-Guild Eagles   | W   | 0.690      | -            | -                | -                | -         |     9.40 | faydett, FpSSS, Pipw, Polt, sugaR |
|           22 |     2270 | 2024-04-02 | PARIVISION        | W   | 0.688      | -            | -                | -                | -         |    12.71 | faydett, FpSSS, Pipw, Polt, sugaR |
|           21 |     2496 | 2024-03-18 | Sashi             | L   | 0.589      | -            | -                | -                | -         |    -6.17 | faydett, FpSSS, Pipw, Polt, sugaR |
|           20 |     2554 | 2024-03-15 | CYBERSHOKE        | W   | 0.570      | -            | -                | -                | -         |     3.48 | faydett, FpSSS, Pipw, Polt, sugaR |
|           19 |     2628 | 2024-03-13 | INGLORIOUS        | W   | 0.556      | -            | -                | -                | -         |     1.68 | faydett, FpSSS, Pipw, Polt, sugaR |
|           18 |     2679 | 2024-03-11 | 1WIN              | W   | 0.542      | -            | -                | -                | -         |     8.81 | faydett, FpSSS, Pipw, Polt, sugaR |
|           17 |     2723 | 2024-03-09 | Fraud5            | W   | 0.529      | -            | -                | -                | -         |     3.30 | faydett, FpSSS, Pipw, Polt, sugaR |
|           16 |     2764 | 2024-03-07 | Sashi             | L   | 0.517      | -            | -                | -                | -         |    -5.06 | faydett, FpSSS, Pipw, Polt, sugaR |
|           15 |     2795 | 2024-03-06 | The Chosen Few    | W   | 0.510      | -            | -                | -                | -         |     3.25 | faydett, FpSSS, Pipw, Polt, sugaR |
|           14 |     2836 | 2024-03-05 | Johnny Speeds     | L   | 0.503      | -            | -                | -                | -         |    -2.04 | faydett, FpSSS, Pipw, Polt, sugaR |
|           13 |     2844 | 2024-03-05 | Betera            | W   | 0.502      | -            | -                | -                | -         |     3.35 | faydett, FpSSS, Pipw, Polt, sugaR |
|           12 |     3378 | 2024-02-09 | Sashi             | L   | 0.335      | -            | -                | -                | -         |    -2.82 | faydett, FpSSS, Pipw, Polt, sugaR |
|           11 |     3388 | 2024-02-08 | ex-Guild Eagles   | W   | 0.330      | -            | -                | -                | -         |     4.95 | faydett, FpSSS, Pipw, Polt, sugaR |
|           10 |     3394 | 2024-02-08 | AMKAL             | L   | 0.328      | -            | -                | -                | -         |    -2.11 | faydett, FpSSS, Pipw, Polt, sugaR |
|            9 |     3558 | 2024-01-30 | Sashi             | L   | 0.270      | -            | -                | -                | -         |    -2.07 | faydett, FpSSS, Pipw, Polt, sugaR |
|            8 |     3563 | 2024-01-30 | fnatic            | W   | 0.269      | -            | -                | -                | -         |     8.25 | faydett, FpSSS, Pipw, Polt, sugaR |
|            7 |     3565 | 2024-01-30 | EXO               | W   | 0.269      | -            | -                | -                | -         |     2.66 | faydett, FpSSS, Pipw, Polt, sugaR |
|            6 |     3899 | 2024-01-18 | AMKAL             | L   | 0.188      | -            | -                | -                | -         |    -1.22 | faydett, FpSSS, Pipw, Polt, sugaR |
|            5 |     3919 | 2024-01-17 | esmagaB           | W   | 0.184      | -            | -                | -                | -         |     1.48 | faydett, FpSSS, Pipw, Polt, sugaR |
|            4 |     3925 | 2024-01-17 | PARIVISION        | W   | 0.183      | -            | -                | -                | -         |     3.25 | faydett, FpSSS, Pipw, Polt, sugaR |
|            3 |     4078 | 2024-01-13 | Permitta          | L   | 0.156      | -            | -                | -                | -         |    -2.40 | faydett, FpSSS, Pipw, Polt, sugaR |
|            2 |     4087 | 2024-01-13 | B8                | W   | 0.155      | -            | -                | -                | -         |     0.23 | faydett, FpSSS, Pipw, Polt, sugaR |
|            1 |     4115 | 2024-01-12 | EYEBALLERS        | W   | 0.150      | -            | -                | -                | -         |     2.27 | faydett, FpSSS, Pipw, Polt, sugaR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,599.19)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-05-04 |      0.902 | $2,000.00      | $1,804.47       |
| 2024-03-25 |      0.636 | $1,250.00      | $794.71         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
