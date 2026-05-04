### Roster Details<br />
Team Name: Tricked<br />
Roster: Boye, IceBerg, leakz, NickyB, salazar<br />
Global Rank: [58](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [38]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  1211.2<br />
<br />
Final Rank Value (1211.2) = Starting Rank Value (1291.0) + Head To Head Adjustments (-79.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.388[<sup>1</sup>](#table2)
- Bounty Collected: 0.376[<sup>2</sup>](#table1)
- Opponent Network: 0.274[<sup>2</sup>](#table1)
- LAN Wins: 0.882[<sup>2</sup>](#table1)

The average of these factors is 0.480<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1291.0
- 400 + ( ( 0.480 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 1291.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |      101 | 2026-04-30 | magic          | L   | 1.000      | -            | -                | -                | -         |   -15.03 | Boye, IceBerg, leakz, NickyB, salazar |
|           46 |      165 | 2026-04-28 | Walczaki       | L   | 1.000      | -            | -                | -                | -         |   -19.21 | Boye, IceBerg, leakz, NickyB, salazar |
|           45 |      356 | 2026-04-24 | SINNERS        | W   | 1.000      | 0.143        | 0.160 (0.023)    | -                | -         |    21.39 | Boye, IceBerg, leakz, NickyB, salazar |
|           44 |      395 | 2026-04-23 | fnatic         | W   | 1.000      | -            | -                | -                | -         |    11.32 | Boye, IceBerg, leakz, NickyB, salazar |
|           43 |      462 | 2026-04-20 | Johnny Speeds  | W   | 1.000      | 0.143        | 0.073 (0.010)    | -                | -         |    15.06 | Boye, IceBerg, leakz, NickyB, salazar |
|           42 |      573 | 2026-04-14 | Young Ninjas   | L   | 1.000      | -            | -                | -                | -         |   -27.10 | Boye, IceBerg, leakz, NickyB, salazar |
|           41 |      596 | 2026-04-13 | Alliance       | L   | 1.000      | -            | -                | -                | -         |    -7.91 | Boye, IceBerg, leakz, NickyB, salazar |
|           40 |      699 | 2026-04-09 | Walczaki       | L   | 1.000      | -            | -                | -                | -         |   -21.91 | Boye, IceBerg, leakz, NickyB, salazar |
|           39 |      725 | 2026-04-08 | ex-RUBY        | W   | 1.000      | 0.435        | 0.052 (0.023)    | 0.995 (0.432)    | -         |     9.94 | Boye, IceBerg, leakz, NickyB, salazar |
|           38 |      851 | 2026-04-05 | Sangal         | L   | 1.000      | -            | -                | -                | -         |   -23.28 | Boye, IceBerg, leakz, NickyB, salazar |
|           37 |      995 | 2026-04-03 | BESTIA         | W   | 0.993      | 0.333        | 0.021 (0.007)    | 0.757 (0.250)    | 1 (0.993) |    19.32 | Boye, IceBerg, leakz, NickyB, salazar |
|           36 |     1015 | 2026-04-03 | HAVENs         | W   | 0.992      | -            | -                | -                | 1 (0.992) |     0.27 | Boye, IceBerg, leakz, NickyB, salazar |
|           35 |     1339 | 2026-03-30 | AM             | L   | 0.967      | -            | -                | -                | -         |   -16.53 | Boye, IceBerg, leakz, NickyB, salazar |
|           34 |     1642 | 2026-03-25 | HOTU           | L   | 0.934      | -            | -                | -                | -         |   -12.14 | Boye, IceBerg, leakz, NickyB, salazar |
|           33 |     1660 | 2026-03-25 | HEROIC         | W   | 0.934      | 0.435        | 0.184 (0.075)    | 0.539 (0.219)    | 1 (0.934) |    23.11 | Boye, IceBerg, leakz, NickyB, salazar |
|           32 |     1692 | 2026-03-24 | BASEMENT BOYS  | W   | 0.928      | 0.435        | -                | 0.395 (0.160)    | 1 (0.928) |     2.40 | Boye, IceBerg, leakz, NickyB, salazar |
|           31 |     1703 | 2026-03-24 | Passion UA     | W   | 0.927      | 0.435        | 0.058 (0.023)    | 0.546 (0.220)    | 1 (0.927) |    17.23 | Boye, IceBerg, leakz, NickyB, salazar |
|           30 |     1734 | 2026-03-24 | BESTIA         | L   | 0.925      | -            | -                | -                | -         |   -13.95 | Boye, IceBerg, leakz, NickyB, salazar |
|           29 |     2183 | 2026-03-15 | Sashi          | W   | 0.867      | 0.356        | -                | 0.594 (0.183)    | 1 (0.867) |     9.71 | Boye, IceBerg, leakz, NickyB, salazar |
|           28 |     2192 | 2026-03-15 | ECSTATIC       | W   | 0.866      | 0.356        | 0.075 (0.023)    | 0.576 (0.178)    | 1 (0.866) |    14.51 | Boye, IceBerg, leakz, NickyB, salazar |
|           27 |     2221 | 2026-03-14 | struggletony   | W   | 0.860      | -            | -                | -                | 1 (0.860) |     1.42 | Boye, IceBerg, leakz, NickyB, salazar |
|           26 |     2232 | 2026-03-14 | Fortress       | W   | 0.859      | -            | -                | -                | 1 (0.859) |     0.52 | Boye, IceBerg, leakz, NickyB, salazar |
|           25 |     2237 | 2026-03-14 | struggletony   | L   | 0.858      | -            | -                | -                | -         |   -25.82 | Boye, IceBerg, leakz, NickyB, salazar |
|           24 |     2692 | 2026-03-05 | 9INE           | L   | 0.800      | -            | -                | -                | -         |   -12.76 | Boye, IceBerg, leakz, NickyB, salazar |
|           23 |     2925 | 2026-02-28 | Inner Circle   | L   | 0.766      | -            | -                | -                | -         |   -13.56 | Boye, IceBerg, leakz, NickyB, salazar |
|           22 |     2978 | 2026-02-27 | MOUZ NXT       | W   | 0.758      | 0.769        | 0.028 (0.017)    | 1.000 (0.583)    | -         |     7.39 | Boye, IceBerg, leakz, NickyB, salazar |
|           21 |     3045 | 2026-02-26 | 9INE           | L   | 0.752      | -            | -                | -                | -         |   -12.66 | Boye, IceBerg, leakz, NickyB, salazar |
|           20 |     3587 | 2026-02-15 | AaB            | W   | 0.681      | 0.624        | 0.014 (0.006)    | 0.847 (0.360)    | -         |     8.47 | Boye, IceBerg, leakz, NickyB, salazar |
|           19 |     3599 | 2026-02-15 | Rune Eaters    | W   | 0.681      | -            | -                | -                | -         |     1.75 | Boye, IceBerg, leakz, NickyB, salazar |
|           18 |     3736 | 2026-02-13 | ENCE           | L   | 0.665      | -            | -                | -                | -         |   -17.42 | Boye, IceBerg, leakz, NickyB, salazar |
|           17 |     3742 | 2026-02-13 | Monte          | L   | 0.665      | -            | -                | -                | -         |    -5.45 | Boye, IceBerg, leakz, NickyB, salazar |
|           16 |     3831 | 2026-02-10 | EYEBALLERS     | L   | 0.648      | -            | -                | -                | -         |    -5.28 | Boye, IceBerg, leakz, NickyB, salazar |
|           15 |     3846 | 2026-02-10 | Inner Circle   | L   | 0.647      | -            | -                | -                | -         |   -11.79 | Boye, IceBerg, leakz, NickyB, salazar |
|           14 |     4543 | 2026-01-17 | Johnny Speeds  | W   | 0.489      | 0.338        | 0.073 (0.012)    | 0.939 (0.155)    | 1 (0.489) |     8.28 | Boye, IceBerg, leakz, NickyB, salazar |
|           13 |     4583 | 2026-01-17 | megoshort      | W   | 0.486      | -            | -                | -                | -         |     1.97 | Boye, IceBerg, leakz, NickyB, salazar |
|           12 |     4597 | 2026-01-17 | AaB            | W   | 0.485      | -            | -                | -                | -         |     6.97 | Boye, IceBerg, leakz, NickyB, salazar |
|           11 |     4619 | 2026-01-16 | Hemmaplan      | W   | 0.480      | -            | -                | -                | -         |     0.10 | Boye, IceBerg, leakz, NickyB, salazar |
|           10 |     4623 | 2026-01-16 | Sashi          | W   | 0.480      | -            | -                | -                | -         |     6.17 | Boye, IceBerg, leakz, NickyB, salazar |
|            9 |     4638 | 2026-01-16 | megoshort      | W   | 0.479      | -            | -                | -                | -         |     2.03 | Boye, IceBerg, leakz, NickyB, salazar |
|            8 |     4646 | 2026-01-16 | SemperFi       | L   | 0.479      | -            | -                | -                | -         |   -10.97 | Boye, IceBerg, leakz, NickyB, salazar |
|            7 |     4652 | 2026-01-16 | HEROIC Academy | W   | 0.479      | -            | -                | -                | -         |     2.56 | Boye, IceBerg, leakz, NickyB, salazar |
|            6 |     5468 | 2025-11-22 | FUT            | L   | 0.113      | -            | -                | -                | -         |    -0.16 | Boye, IceBerg, leakz, NickyB, salazar |
|            5 |     5484 | 2025-11-22 | ECSTATIC       | L   | 0.112      | -            | -                | -                | -         |    -1.90 | Boye, IceBerg, leakz, NickyB, salazar |
|            4 |     5507 | 2025-11-21 | illwill        | W   | 0.106      | -            | -                | -                | -         |     0.65 | Boye, IceBerg, leakz, NickyB, salazar |
|            3 |     5530 | 2025-11-21 | Betclic        | W   | 0.104      | -            | -                | -                | -         |     1.45 | Boye, IceBerg, leakz, NickyB, salazar |
|            2 |     5558 | 2025-11-20 | AM             | W   | 0.099      | -            | -                | -                | -         |     0.08 | Boye, IceBerg, leakz, NickyB, salazar |
|            1 |     5570 | 2025-11-20 | ASTRAL         | W   | 0.098      | -            | -                | -                | -         |     1.04 | Boye, IceBerg, leakz, NickyB, salazar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,482.74)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-10 |      1.000 | $2,000.00      | $2,000.00       |
| 2026-04-05 |      1.000 | $1,000.00      | $1,000.00       |
| 2026-03-26 |      0.941 | $750.00        | $705.89         |
| 2026-03-15 |      0.867 | $7,055.00      | $6,113.67       |
| 2026-01-17 |      0.489 | $5,448.00      | $2,663.18       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
