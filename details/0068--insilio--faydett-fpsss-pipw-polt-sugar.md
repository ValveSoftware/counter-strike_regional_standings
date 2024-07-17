### Roster Details<br />
Team Name: Insilio<br />
Roster: faydett, FpSSS, Pipw, Polt, sugaR<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [68](../standings_global.md)<br />
Regional Rank: [48]( ../standings_europe.md)<br />
Final Rank Value:  1022.6<br />
<br />
Final Rank Value (1022.6) = Starting Rank Value (952.5) + Head To Head Adjustments (70.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.408[<sup>1</sup>](#table2)
- Bounty Collected: 0.396[<sup>2</sup>](#table1)
- Opponent Network: 0.226[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.257<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 952.5
- 400 + ( ( 0.257 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 952.5


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
|           45 |       52 | 2024-07-16 | KOI               | L   | 1.000      | -            | -                | -                | -         |    -9.07 | faydett, FpSSS, Pipw, Polt, sugaR |
|           44 |      131 | 2024-07-14 | Permitta          | W   | 1.000      | 0.371        | 0.039 (0.014)    | 0.794 (0.294)    | 0 (0.000) |    14.55 | faydett, FpSSS, Pipw, Polt, sugaR |
|           43 |      192 | 2024-07-10 | Preasy            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.63 | faydett, FpSSS, Pipw, Polt, sugaR |
|           42 |      215 | 2024-07-09 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -14.36 | faydett, FpSSS, Pipw, Polt, sugaR |
|           41 |      234 | 2024-07-08 | FLuffy Gangsters  | L   | 1.000      | -            | -                | -                | -         |   -28.56 | faydett, FpSSS, Pipw, Polt, sugaR |
|           40 |      492 | 2024-06-10 | ARCRED            | W   | 0.955      | 0.372        | 0.057 (0.020)    | -                | 0 (0.000) |    11.77 | faydett, FpSSS, Pipw, Polt, sugaR |
|           39 |      540 | 2024-06-09 | RUBY              | W   | 0.947      | 0.372        | 0.144 (0.051)    | 0.580 (0.204)    | 0 (0.000) |    11.86 | faydett, FpSSS, Pipw, Polt, sugaR |
|           38 |      594 | 2024-06-08 | Zero Tenacity     | W   | 0.941      | 0.372        | 0.154 (0.054)    | 1.000 (0.350)    | 0 (0.000) |    18.98 | faydett, FpSSS, Pipw, Polt, sugaR |
|           37 |      661 | 2024-06-07 | Aurora Young Blud | W   | 0.934      | -            | -                | -                | 0 (0.000) |     7.63 | faydett, FpSSS, Pipw, Polt, sugaR |
|           36 |      863 | 2024-06-03 | RUBY              | L   | 0.908      | -            | -                | -                | -         |   -14.27 | faydett, FpSSS, Pipw, Polt, sugaR |
|           35 |      920 | 2024-06-01 | 1WIN              | W   | 0.893      | 0.372        | 0.041 (0.014)    | 0.545 (0.181)    | 0 (0.000) |    16.28 | faydett, FpSSS, Pipw, Polt, sugaR |
|           34 |      971 | 2024-05-30 | VP.Prodigy        | W   | 0.881      | 0.372        | 0.039 (0.013)    | 0.498 (0.163)    | 0 (0.000) |    12.71 | faydett, FpSSS, Pipw, Polt, sugaR |
|           33 |     1629 | 2024-05-07 | RUBY              | L   | 0.727      | -            | -                | -                | -         |   -11.42 | faydett, FpSSS, Pipw, Polt, sugaR |
|           32 |     1648 | 2024-05-06 | Zero Tenacity     | L   | 0.720      | -            | -                | -                | -         |    -9.62 | faydett, FpSSS, Pipw, Polt, sugaR |
|           31 |     1652 | 2024-05-06 | BLEED             | L   | 0.719      | -            | -                | -                | -         |    -6.71 | faydett, FpSSS, Pipw, Polt, sugaR |
|           30 |     1698 | 2024-05-03 | Permitta          | W   | 0.700      | 0.435        | 0.039 (0.012)    | 0.794 (0.242)    | 0 (0.000) |     9.38 | faydett, FpSSS, Pipw, Polt, sugaR |
|           29 |     1710 | 2024-05-03 | BetBoom           | L   | 0.698      | -            | -                | -                | -         |    -1.01 | faydett, FpSSS, Pipw, Polt, sugaR |
|           28 |     1742 | 2024-05-01 | OG                | W   | 0.687      | 0.435        | 0.210 (0.063)    | -                | 0 (0.000) |    16.52 | faydett, FpSSS, Pipw, Polt, sugaR |
|           27 |     1753 | 2024-05-01 | Nexus             | W   | 0.686      | -            | -                | -                | -         |     7.19 | faydett, FpSSS, Pipw, Polt, sugaR |
|           26 |     1794 | 2024-04-29 | HAVU              | L   | 0.673      | -            | -                | -                | -         |   -17.10 | faydett, FpSSS, Pipw, Polt, sugaR |
|           25 |     1830 | 2024-04-27 | ex-Guild Eagles   | W   | 0.661      | -            | -                | -                | -         |     8.53 | faydett, FpSSS, Pipw, Polt, sugaR |
|           24 |     1837 | 2024-04-27 | Permitta          | W   | 0.660      | 0.396        | -                | 0.794 (0.208)    | -         |    10.36 | faydett, FpSSS, Pipw, Polt, sugaR |
|           23 |     1859 | 2024-04-26 | ARCRED            | L   | 0.654      | -            | -                | -                | -         |   -12.50 | faydett, FpSSS, Pipw, Polt, sugaR |
|           22 |     1864 | 2024-04-26 | Enterprise        | W   | 0.653      | 0.396        | 0.055 (0.014)    | 0.635 (0.164)    | -         |     9.71 | faydett, FpSSS, Pipw, Polt, sugaR |
|           21 |     1898 | 2024-04-25 | MOUZ NXT          | W   | 0.645      | 0.435        | 0.150 (0.042)    | 1.000 (0.280)    | -         |    13.11 | faydett, FpSSS, Pipw, Polt, sugaR |
|           20 |     1924 | 2024-04-23 | EYEBALLERS        | W   | 0.634      | 0.435        | -                | 0.619 (0.171)    | -         |     8.55 | faydett, FpSSS, Pipw, Polt, sugaR |
|           19 |     1973 | 2024-04-21 | Permitta          | L   | 0.618      | -            | -                | -                | -         |    -9.27 | faydett, FpSSS, Pipw, Polt, sugaR |
|           18 |     2511 | 2024-04-03 | AMKAL             | L   | 0.501      | -            | -                | -                | -         |    -5.08 | faydett, FpSSS, Pipw, Polt, sugaR |
|           17 |     2552 | 2024-04-02 | ex-Guild Eagles   | W   | 0.494      | -            | -                | -                | -         |     6.11 | faydett, FpSSS, Pipw, Polt, sugaR |
|           16 |     2568 | 2024-04-02 | PARIVISION        | W   | 0.492      | -            | -                | -                | -         |     8.68 | faydett, FpSSS, Pipw, Polt, sugaR |
|           15 |     2793 | 2024-03-18 | Sashi             | L   | 0.393      | -            | -                | -                | -         |    -3.71 | faydett, FpSSS, Pipw, Polt, sugaR |
|           14 |     2851 | 2024-03-15 | CYBERSHOKE        | W   | 0.375      | -            | -                | -                | -         |     2.32 | faydett, FpSSS, Pipw, Polt, sugaR |
|           13 |     2925 | 2024-03-13 | INGLORIOUS        | W   | 0.360      | -            | -                | -                | -         |     1.08 | faydett, FpSSS, Pipw, Polt, sugaR |
|           12 |     2976 | 2024-03-11 | 1WIN              | W   | 0.347      | -            | -                | -                | -         |     5.34 | faydett, FpSSS, Pipw, Polt, sugaR |
|           11 |     3020 | 2024-03-09 | Fraud5            | W   | 0.333      | -            | -                | -                | -         |     2.01 | faydett, FpSSS, Pipw, Polt, sugaR |
|           10 |     3061 | 2024-03-07 | Sashi             | L   | 0.321      | -            | -                | -                | -         |    -2.83 | faydett, FpSSS, Pipw, Polt, sugaR |
|            9 |     3092 | 2024-03-06 | The Chosen Few    | W   | 0.314      | -            | -                | -                | -         |     1.96 | faydett, FpSSS, Pipw, Polt, sugaR |
|            8 |     3133 | 2024-03-05 | Johnny Speeds     | L   | 0.307      | -            | -                | -                | -         |    -0.72 | faydett, FpSSS, Pipw, Polt, sugaR |
|            7 |     3141 | 2024-03-05 | Betera            | W   | 0.307      | -            | -                | -                | -         |     2.21 | faydett, FpSSS, Pipw, Polt, sugaR |
|            6 |     3675 | 2024-02-09 | Sashi             | L   | 0.140      | -            | -                | -                | -         |    -1.10 | faydett, FpSSS, Pipw, Polt, sugaR |
|            5 |     3685 | 2024-02-08 | ex-Guild Eagles   | W   | 0.135      | -            | -                | -                | -         |     1.77 | faydett, FpSSS, Pipw, Polt, sugaR |
|            4 |     3691 | 2024-02-08 | AMKAL             | L   | 0.133      | -            | -                | -                | -         |    -1.18 | faydett, FpSSS, Pipw, Polt, sugaR |
|            3 |     3855 | 2024-01-30 | Sashi             | L   | 0.075      | -            | -                | -                | -         |    -0.57 | faydett, FpSSS, Pipw, Polt, sugaR |
|            2 |     3860 | 2024-01-30 | fnatic            | W   | 0.074      | -            | -                | -                | -         |     2.27 | faydett, FpSSS, Pipw, Polt, sugaR |
|            1 |     3862 | 2024-01-30 | EXO               | W   | 0.074      | -            | -                | -                | -         |     0.68 | faydett, FpSSS, Pipw, Polt, sugaR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,647.09)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      0.955 | $7,000.00      | $6,682.57       |
| 2024-05-04 |      0.707 | $2,000.00      | $1,413.91       |
| 2024-03-25 |      0.440 | $1,250.00      | $550.61         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
