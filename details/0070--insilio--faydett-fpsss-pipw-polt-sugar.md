### Roster Details<br />
Team Name: Insilio<br />
Roster: faydett, FpSSS, Pipw, Polt, sugaR<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [70](../standings_global.md)<br />
Regional Rank: [49]( ../standings_europe.md)<br />
Final Rank Value:  1018.6<br />
<br />
Final Rank Value (1018.6) = Starting Rank Value (943.0) + Head To Head Adjustments (75.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.407[<sup>1</sup>](#table2)
- Bounty Collected: 0.398[<sup>2</sup>](#table1)
- Opponent Network: 0.225[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.257<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 943.0
- 400 + ( ( 0.257 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 943.0


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
|           47 |       28 | 2024-07-10 | Preasy            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.40 | faydett, FpSSS, Pipw, Polt, sugaR |
|           46 |       51 | 2024-07-09 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -15.07 | faydett, FpSSS, Pipw, Polt, sugaR |
|           45 |       70 | 2024-07-08 | FLuffy Gangsters  | L   | 1.000      | -            | -                | -                | -         |   -28.79 | faydett, FpSSS, Pipw, Polt, sugaR |
|           44 |      328 | 2024-06-10 | ARCRED            | W   | 0.994      | 0.372        | 0.055 (0.020)    | 0.365 (0.135)    | 0 (0.000) |    11.97 | faydett, FpSSS, Pipw, Polt, sugaR |
|           43 |      376 | 2024-06-09 | RUBY              | W   | 0.987      | 0.372        | 0.139 (0.051)    | 0.563 (0.207)    | 0 (0.000) |    11.86 | faydett, FpSSS, Pipw, Polt, sugaR |
|           42 |      430 | 2024-06-08 | Zero Tenacity     | W   | 0.981      | 0.372        | 0.153 (0.056)    | 1.000 (0.365)    | 0 (0.000) |    19.64 | faydett, FpSSS, Pipw, Polt, sugaR |
|           41 |      497 | 2024-06-07 | Aurora Young Blud | W   | 0.974      | -            | -                | -                | 0 (0.000) |     7.04 | faydett, FpSSS, Pipw, Polt, sugaR |
|           40 |      699 | 2024-06-03 | RUBY              | L   | 0.947      | -            | -                | -                | -         |   -15.32 | faydett, FpSSS, Pipw, Polt, sugaR |
|           39 |      756 | 2024-06-01 | 1WIN              | W   | 0.933      | 0.372        | 0.041 (0.014)    | 0.570 (0.198)    | 0 (0.000) |    17.48 | faydett, FpSSS, Pipw, Polt, sugaR |
|           38 |      807 | 2024-05-30 | VP.Prodigy        | W   | 0.921      | 0.372        | 0.038 (0.013)    | 0.519 (0.178)    | 0 (0.000) |    13.18 | faydett, FpSSS, Pipw, Polt, sugaR |
|           37 |     1465 | 2024-05-07 | RUBY              | L   | 0.767      | -            | -                | -                | -         |   -12.56 | faydett, FpSSS, Pipw, Polt, sugaR |
|           36 |     1484 | 2024-05-06 | Zero Tenacity     | L   | 0.760      | -            | -                | -                | -         |   -10.20 | faydett, FpSSS, Pipw, Polt, sugaR |
|           35 |     1488 | 2024-05-06 | BLEED             | L   | 0.758      | -            | -                | -                | -         |    -3.23 | faydett, FpSSS, Pipw, Polt, sugaR |
|           34 |     1534 | 2024-05-03 | Permitta          | W   | 0.740      | 0.435        | 0.038 (0.012)    | 0.837 (0.269)    | 0 (0.000) |    10.00 | faydett, FpSSS, Pipw, Polt, sugaR |
|           33 |     1546 | 2024-05-03 | BetBoom           | L   | 0.738      | -            | -                | -                | -         |    -1.01 | faydett, FpSSS, Pipw, Polt, sugaR |
|           32 |     1578 | 2024-05-01 | OG                | W   | 0.727      | 0.435        | 0.215 (0.068)    | -                | 0 (0.000) |    18.03 | faydett, FpSSS, Pipw, Polt, sugaR |
|           31 |     1589 | 2024-05-01 | Romania           | W   | 0.725      | -            | -                | -                | 0 (0.000) |     7.53 | faydett, FpSSS, Pipw, Polt, sugaR |
|           30 |     1630 | 2024-04-29 | HAVU              | L   | 0.712      | -            | -                | -                | -         |   -18.09 | faydett, FpSSS, Pipw, Polt, sugaR |
|           29 |     1666 | 2024-04-27 | ex-Guild Eagles   | W   | 0.700      | -            | -                | -                | -         |     9.41 | faydett, FpSSS, Pipw, Polt, sugaR |
|           28 |     1673 | 2024-04-27 | Permitta          | W   | 0.699      | 0.396        | 0.038 (0.011)    | 0.837 (0.232)    | -         |    11.10 | faydett, FpSSS, Pipw, Polt, sugaR |
|           27 |     1695 | 2024-04-26 | ARCRED            | L   | 0.693      | -            | -                | -                | -         |   -13.37 | faydett, FpSSS, Pipw, Polt, sugaR |
|           26 |     1700 | 2024-04-26 | Enterprise        | W   | 0.692      | 0.396        | 0.053 (0.015)    | 0.654 (0.179)    | -         |    10.48 | faydett, FpSSS, Pipw, Polt, sugaR |
|           25 |     1734 | 2024-04-25 | MOUZ NXT          | W   | 0.685      | 0.435        | 0.152 (0.045)    | 1.000 (0.298)    | -         |    14.07 | faydett, FpSSS, Pipw, Polt, sugaR |
|           24 |     1760 | 2024-04-23 | EYEBALLERS        | W   | 0.673      | 0.435        | -                | 0.646 (0.189)    | -         |     9.09 | faydett, FpSSS, Pipw, Polt, sugaR |
|           23 |     1809 | 2024-04-21 | Permitta          | L   | 0.658      | -            | -                | -                | -         |    -9.78 | faydett, FpSSS, Pipw, Polt, sugaR |
|           22 |     2347 | 2024-04-03 | AMKAL             | L   | 0.541      | -            | -                | -                | -         |    -5.07 | faydett, FpSSS, Pipw, Polt, sugaR |
|           21 |     2388 | 2024-04-02 | ex-Guild Eagles   | W   | 0.534      | -            | -                | -                | -         |     6.84 | faydett, FpSSS, Pipw, Polt, sugaR |
|           20 |     2404 | 2024-04-02 | PARIVISION        | W   | 0.532      | -            | -                | -                | -         |     9.80 | faydett, FpSSS, Pipw, Polt, sugaR |
|           19 |     2629 | 2024-03-18 | Sashi             | L   | 0.433      | -            | -                | -                | -         |    -4.02 | faydett, FpSSS, Pipw, Polt, sugaR |
|           18 |     2687 | 2024-03-15 | CYBERSHOKE        | W   | 0.414      | -            | -                | -                | -         |     2.62 | faydett, FpSSS, Pipw, Polt, sugaR |
|           17 |     2761 | 2024-03-13 | INGLORIOUS        | W   | 0.400      | -            | -                | -                | -         |     1.24 | faydett, FpSSS, Pipw, Polt, sugaR |
|           16 |     2812 | 2024-03-11 | 1WIN              | W   | 0.387      | -            | -                | -                | -         |     6.23 | faydett, FpSSS, Pipw, Polt, sugaR |
|           15 |     2856 | 2024-03-09 | Fraud5            | W   | 0.373      | -            | -                | -                | -         |     2.31 | faydett, FpSSS, Pipw, Polt, sugaR |
|           14 |     2897 | 2024-03-07 | Sashi             | L   | 0.361      | -            | -                | -                | -         |    -3.16 | faydett, FpSSS, Pipw, Polt, sugaR |
|           13 |     2928 | 2024-03-06 | The Chosen Few    | W   | 0.354      | -            | -                | -                | -         |     2.27 | faydett, FpSSS, Pipw, Polt, sugaR |
|           12 |     2969 | 2024-03-05 | Johnny Speeds     | L   | 0.347      | -            | -                | -                | -         |    -0.82 | faydett, FpSSS, Pipw, Polt, sugaR |
|           11 |     2977 | 2024-03-05 | Betera            | W   | 0.347      | -            | -                | -                | -         |     2.69 | faydett, FpSSS, Pipw, Polt, sugaR |
|           10 |     3511 | 2024-02-09 | Sashi             | L   | 0.179      | -            | -                | -                | -         |    -1.39 | faydett, FpSSS, Pipw, Polt, sugaR |
|            9 |     3521 | 2024-02-08 | ex-Guild Eagles   | W   | 0.174      | -            | -                | -                | -         |     2.40 | faydett, FpSSS, Pipw, Polt, sugaR |
|            8 |     3527 | 2024-02-08 | AMKAL             | L   | 0.173      | -            | -                | -                | -         |    -1.36 | faydett, FpSSS, Pipw, Polt, sugaR |
|            7 |     3691 | 2024-01-30 | Sashi             | L   | 0.115      | -            | -                | -                | -         |    -0.85 | faydett, FpSSS, Pipw, Polt, sugaR |
|            6 |     3696 | 2024-01-30 | fnatic            | W   | 0.114      | -            | -                | -                | -         |     3.50 | faydett, FpSSS, Pipw, Polt, sugaR |
|            5 |     3698 | 2024-01-30 | EXO               | W   | 0.113      | -            | -                | -                | -         |     1.09 | faydett, FpSSS, Pipw, Polt, sugaR |
|            4 |     4032 | 2024-01-18 | AMKAL             | L   | 0.032      | -            | -                | -                | -         |    -0.25 | faydett, FpSSS, Pipw, Polt, sugaR |
|            3 |     4052 | 2024-01-17 | Portugal          | W   | 0.028      | -            | -                | -                | -         |     0.22 | faydett, FpSSS, Pipw, Polt, sugaR |
|            2 |     4058 | 2024-01-17 | PARIVISION        | W   | 0.028      | -            | -                | -                | -         |     0.49 | faydett, FpSSS, Pipw, Polt, sugaR |
|            1 |     4211 | 2024-01-13 | Permitta          | L   | 0.000      | -            | -                | -                | -         |     0.00 | faydett, FpSSS, Pipw, Polt, sugaR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,053.09)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      0.994 | $7,000.00      | $6,959.84       |
| 2024-05-04 |      0.747 | $2,000.00      | $1,493.13       |
| 2024-03-25 |      0.480 | $1,250.00      | $600.12         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
