### Roster Details<br />
Team Name: Insilio<br />
Roster: faydett, FpSSS, Pipw, Polt, sugaR<br />
Global Rank: [72](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [52]( ../standings_europe.md)<br />
<br />
Final Rank Value:  950.5<br />
<br />
Final Rank Value (950.5) = Starting Rank Value (896.5) + Head To Head Adjustments (54.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.380[<sup>1</sup>](#table2)
- Bounty Collected: 0.371[<sup>2</sup>](#table1)
- Opponent Network: 0.211[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.240<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 896.5
- 400 + ( ( 0.240 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 896.5


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
|           50 |       12 | 2024-07-31 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -6.88 | faydett, FpSSS, Pipw, Polt, sugaR |
|           49 |       57 | 2024-07-30 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -11.03 | faydett, FpSSS, Pipw, Polt, sugaR |
|           48 |      124 | 2024-07-28 | Metizport         | W   | 1.000      | -            | -                | -                | 0 (0.000) |    14.28 | faydett, FpSSS, Pipw, Polt, sugaR |
|           47 |      246 | 2024-07-24 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -8.44 | faydett, FpSSS, Pipw, Polt, sugaR |
|           46 |      318 | 2024-07-22 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -13.70 | faydett, FpSSS, Pipw, Polt, sugaR |
|           45 |      383 | 2024-07-20 | UNiTY             | W   | 1.000      | 0.371        | 0.025 (0.009)    | -                | 0 (0.000) |    14.82 | faydett, FpSSS, Pipw, Polt, sugaR |
|           44 |      421 | 2024-07-19 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -17.15 | faydett, FpSSS, Pipw, Polt, sugaR |
|           43 |      458 | 2024-07-18 | EYEBALLERS        | W   | 1.000      | 0.500        | -                | 0.513 (0.257)    | 0 (0.000) |    10.08 | faydett, FpSSS, Pipw, Polt, sugaR |
|           42 |      582 | 2024-07-16 | KOI               | L   | 1.000      | -            | -                | -                | -         |    -9.59 | faydett, FpSSS, Pipw, Polt, sugaR |
|           41 |      661 | 2024-07-14 | Permitta          | W   | 1.000      | 0.371        | 0.025 (0.009)    | 0.799 (0.296)    | 0 (0.000) |    15.33 | faydett, FpSSS, Pipw, Polt, sugaR |
|           40 |      722 | 2024-07-10 | Preasy            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.70 | faydett, FpSSS, Pipw, Polt, sugaR |
|           39 |      745 | 2024-07-09 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -12.04 | faydett, FpSSS, Pipw, Polt, sugaR |
|           38 |      764 | 2024-07-08 | FLuffy Gangsters  | L   | 1.000      | -            | -                | -                | -         |   -27.87 | faydett, FpSSS, Pipw, Polt, sugaR |
|           37 |     1022 | 2024-06-10 | ARCRED            | W   | 0.860      | 0.372        | 0.039 (0.012)    | -                | 0 (0.000) |    10.93 | faydett, FpSSS, Pipw, Polt, sugaR |
|           36 |     1070 | 2024-06-09 | RUBY              | W   | 0.852      | 0.372        | 0.097 (0.031)    | 0.506 (0.161)    | 0 (0.000) |    10.98 | faydett, FpSSS, Pipw, Polt, sugaR |
|           35 |     1124 | 2024-06-08 | Zero Tenacity     | W   | 0.847      | 0.372        | 0.139 (0.044)    | 1.000 (0.315)    | 0 (0.000) |    18.35 | faydett, FpSSS, Pipw, Polt, sugaR |
|           34 |     1191 | 2024-06-07 | Aurora Young Blud | W   | 0.839      | 0.372        | -                | 0.416 (0.130)    | 0 (0.000) |     9.16 | faydett, FpSSS, Pipw, Polt, sugaR |
|           33 |     1393 | 2024-06-03 | RUBY              | L   | 0.813      | -            | -                | -                | -         |   -12.72 | faydett, FpSSS, Pipw, Polt, sugaR |
|           32 |     1450 | 2024-06-01 | 1WIN              | W   | 0.799      | 0.372        | 0.027 (0.008)    | 0.630 (0.187)    | 0 (0.000) |    14.30 | faydett, FpSSS, Pipw, Polt, sugaR |
|           31 |     1501 | 2024-05-30 | VP.Prodigy        | W   | 0.786      | 0.372        | 0.026 (0.008)    | -                | -         |    12.08 | faydett, FpSSS, Pipw, Polt, sugaR |
|           30 |     2159 | 2024-05-07 | RUBY              | L   | 0.632      | -            | -                | -                | -         |   -10.00 | faydett, FpSSS, Pipw, Polt, sugaR |
|           29 |     2178 | 2024-05-06 | Zero Tenacity     | L   | 0.626      | -            | -                | -                | -         |    -7.09 | faydett, FpSSS, Pipw, Polt, sugaR |
|           28 |     2182 | 2024-05-06 | BLEED             | L   | 0.624      | -            | -                | -                | -         |    -6.43 | faydett, FpSSS, Pipw, Polt, sugaR |
|           27 |     2228 | 2024-05-03 | Permitta          | W   | 0.605      | 0.435        | -                | 0.799 (0.210)    | -         |     8.72 | faydett, FpSSS, Pipw, Polt, sugaR |
|           26 |     2240 | 2024-05-03 | BetBoom           | L   | 0.604      | -            | -                | -                | -         |    -1.21 | faydett, FpSSS, Pipw, Polt, sugaR |
|           25 |     2272 | 2024-05-01 | OG                | W   | 0.593      | 0.435        | 0.144 (0.037)    | -                | -         |    12.85 | faydett, FpSSS, Pipw, Polt, sugaR |
|           24 |     2283 | 2024-05-01 | Nexus             | W   | 0.591      | -            | -                | -                | -         |     6.84 | faydett, FpSSS, Pipw, Polt, sugaR |
|           23 |     2324 | 2024-04-29 | HAVU              | L   | 0.578      | -            | -                | -                | -         |   -14.47 | faydett, FpSSS, Pipw, Polt, sugaR |
|           22 |     2360 | 2024-04-27 | ex-Guild Eagles   | W   | 0.566      | -            | -                | -                | -         |     7.24 | faydett, FpSSS, Pipw, Polt, sugaR |
|           21 |     2367 | 2024-04-27 | Permitta          | W   | 0.565      | 0.396        | -                | 0.799 (0.179)    | -         |     9.31 | faydett, FpSSS, Pipw, Polt, sugaR |
|           20 |     2389 | 2024-04-26 | ARCRED            | L   | 0.559      | -            | -                | -                | -         |   -10.39 | faydett, FpSSS, Pipw, Polt, sugaR |
|           19 |     2394 | 2024-04-26 | Enterprise        | W   | 0.558      | 0.396        | 0.040 (0.009)    | 0.622 (0.138)    | -         |     8.28 | faydett, FpSSS, Pipw, Polt, sugaR |
|           18 |     2428 | 2024-04-25 | MOUZ NXT          | W   | 0.551      | 0.435        | 0.141 (0.034)    | 1.000 (0.239)    | -         |    11.48 | faydett, FpSSS, Pipw, Polt, sugaR |
|           17 |     2454 | 2024-04-23 | EYEBALLERS        | W   | 0.539      | -            | -                | -                | -         |     7.87 | faydett, FpSSS, Pipw, Polt, sugaR |
|           16 |     2503 | 2024-04-21 | Permitta          | L   | 0.524      | -            | -                | -                | -         |    -7.48 | faydett, FpSSS, Pipw, Polt, sugaR |
|           15 |     3041 | 2024-04-03 | AMKAL             | L   | 0.406      | -            | -                | -                | -         |    -2.90 | faydett, FpSSS, Pipw, Polt, sugaR |
|           14 |     3082 | 2024-04-02 | ex-Guild Eagles   | W   | 0.400      | -            | -                | -                | -         |     4.79 | faydett, FpSSS, Pipw, Polt, sugaR |
|           13 |     3098 | 2024-04-02 | PARIVISION        | W   | 0.398      | -            | -                | -                | -         |     9.48 | faydett, FpSSS, Pipw, Polt, sugaR |
|           12 |     3323 | 2024-03-18 | Sashi             | L   | 0.299      | -            | -                | -                | -         |    -2.04 | faydett, FpSSS, Pipw, Polt, sugaR |
|           11 |     3381 | 2024-03-15 | CYBERSHOKE        | W   | 0.280      | -            | -                | -                | -         |     1.94 | faydett, FpSSS, Pipw, Polt, sugaR |
|           10 |     3455 | 2024-03-13 | INGLORIOUS        | W   | 0.266      | -            | -                | -                | -         |     0.98 | faydett, FpSSS, Pipw, Polt, sugaR |
|            9 |     3506 | 2024-03-11 | 1WIN              | W   | 0.252      | -            | -                | -                | -         |     3.90 | faydett, FpSSS, Pipw, Polt, sugaR |
|            8 |     3550 | 2024-03-09 | Fraud5            | W   | 0.239      | -            | -                | -                | -         |     1.52 | faydett, FpSSS, Pipw, Polt, sugaR |
|            7 |     3591 | 2024-03-07 | Sashi             | L   | 0.227      | -            | -                | -                | -         |    -1.41 | faydett, FpSSS, Pipw, Polt, sugaR |
|            6 |     3622 | 2024-03-06 | The Chosen Few    | W   | 0.220      | -            | -                | -                | -         |     1.58 | faydett, FpSSS, Pipw, Polt, sugaR |
|            5 |     3663 | 2024-03-05 | Johnny Speeds     | L   | 0.213      | -            | -                | -                | -         |    -0.61 | faydett, FpSSS, Pipw, Polt, sugaR |
|            4 |     3671 | 2024-03-05 | Betera            | W   | 0.212      | -            | -                | -                | -         |     1.68 | faydett, FpSSS, Pipw, Polt, sugaR |
|            3 |     4205 | 2024-02-09 | Sashi             | L   | 0.045      | -            | -                | -                | -         |    -0.25 | faydett, FpSSS, Pipw, Polt, sugaR |
|            2 |     4215 | 2024-02-08 | ex-Guild Eagles   | W   | 0.040      | -            | -                | -                | -         |     0.51 | faydett, FpSSS, Pipw, Polt, sugaR |
|            1 |     4221 | 2024-02-08 | AMKAL             | L   | 0.039      | -            | -                | -                | -         |    -0.23 | faydett, FpSSS, Pipw, Polt, sugaR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,678.33)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      0.860 | $7,000.00      | $6,020.98       |
| 2024-05-04 |      0.612 | $2,000.00      | $1,224.88       |
| 2024-03-25 |      0.346 | $1,250.00      | $432.47         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
