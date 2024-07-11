### Roster Details<br />
Team Name: Enterprise<br />
Roster: bajmi, Demho, ex1st, fr3nd, Sobol<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [73](../standings_global.md)<br />
Regional Rank: [52]( ../standings_europe.md)<br />
Final Rank Value:  1003.7<br />
<br />
Final Rank Value (1003.7) = Starting Rank Value (998.4) + Head To Head Adjustments (5.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.440[<sup>1</sup>](#table2)
- Bounty Collected: 0.400[<sup>2</sup>](#table1)
- Opponent Network: 0.271[<sup>2</sup>](#table1)
- LAN Wins: 0.025[<sup>2</sup>](#table1)

The average of these factors is 0.284<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 998.4
- 400 + ( ( 0.284 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 998.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           56 |       69 | 2024-07-08 | Revenant          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.76 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           55 |      165 | 2024-06-16 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -5.48 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           54 |      252 | 2024-06-13 | PERA              | L   | 1.000      | -            | -                | -                | -         |   -13.78 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           53 |      269 | 2024-06-13 | Illuminar         | W   | 1.000      | -            | -                | -                | 0 (0.000) |    14.89 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           52 |      293 | 2024-06-12 | Slovakia          | W   | 1.000      | 0.379        | 0.045 (0.017)    | 0.891 (0.337)    | 0 (0.000) |    11.76 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           51 |      336 | 2024-06-10 | SINNERS           | W   | 0.993      | 0.379        | 0.057 (0.022)    | 0.767 (0.288)    | 0 (0.000) |    18.17 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           50 |      350 | 2024-06-10 | Gaimin Gladiators | W   | 0.992      | 0.450        | 0.069 (0.031)    | 0.528 (0.236)    | 0 (0.000) |    20.98 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           49 |      392 | 2024-06-09 | Czech Republic    | L   | 0.986      | -            | -                | -                | -         |    -6.98 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           48 |      436 | 2024-06-08 | Romania           | W   | 0.980      | -            | -                | -                | 0 (0.000) |     8.18 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           47 |      516 | 2024-06-07 | Entropiq          | W   | 0.972      | -            | -                | -                | 0 (0.000) |     1.38 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           46 |      565 | 2024-06-06 | Illuminar         | L   | 0.967      | -            | -                | -                | -         |   -17.23 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           45 |      616 | 2024-06-05 | Verdant           | L   | 0.961      | -            | -                | -                | -         |   -19.98 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           44 |      628 | 2024-06-05 | Serbia            | L   | 0.960      | -            | -                | -                | -         |   -20.39 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           43 |      688 | 2024-06-04 | Johnny Speeds     | W   | 0.951      | 0.371        | 0.158 (0.056)    | 0.825 (0.291)    | 0 (0.000) |    25.80 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           42 |      711 | 2024-06-03 | UNiTY             | W   | 0.945      | 0.371        | 0.039 (0.014)    | -                | 0 (0.000) |    17.14 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           41 |      754 | 2024-06-01 | ARCRED            | L   | 0.933      | -            | -                | -                | -         |   -16.39 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           40 |      768 | 2024-06-01 | Permitta          | W   | 0.931      | 0.371        | 0.038 (0.013)    | 0.837 (0.289)    | -         |    13.34 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           39 |      809 | 2024-05-30 | RUSTEC            | W   | 0.921      | -            | -                | -                | -         |     1.19 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           38 |      823 | 2024-05-30 | brazylijski luz   | L   | 0.918      | -            | -                | -                | -         |   -17.98 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           37 |      833 | 2024-05-29 | FLuffy Gangsters  | W   | 0.914      | -            | -                | -                | -         |     2.56 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           36 |      861 | 2024-05-28 | Slovakia          | W   | 0.907      | 0.379        | 0.045 (0.015)    | 0.891 (0.306)    | -         |    13.87 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           35 |      942 | 2024-05-24 | Illuminar         | W   | 0.879      | -            | -                | -                | -         |     4.99 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           34 |      989 | 2024-05-22 | Entropiq          | W   | 0.867      | -            | -                | -                | -         |     1.15 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           33 |     1077 | 2024-05-20 | ECSTATIC          | W   | 0.852      | -            | -                | -                | -         |     1.14 | bajmi, Demho, ex1st, fr3nd, Sobol  |
|           32 |     1406 | 2024-05-10 | BetBoom           | L   | 0.785      | -            | -                | -                | -         |    -0.99 | bajmi, Demho, ex1st, fr3nd, kadziu |
|           31 |     1473 | 2024-05-07 | Permitta          | W   | 0.765      | 0.435        | -                | 0.837 (0.278)    | -         |    12.20 | bajmi, Demho, ex1st, fr3nd, kadziu |
|           30 |     1487 | 2024-05-06 | B8                | L   | 0.759      | -            | -                | -                | -         |    -6.95 | bajmi, Demho, ex1st, fr3nd, kadziu |
|           29 |     1515 | 2024-05-04 | MOUZ NXT          | W   | 0.747      | 0.435        | 0.152 (0.049)    | 1.000 (0.325)    | -         |    16.40 | bajmi, Demho, ex1st, fr3nd, kadziu |
|           28 |     1574 | 2024-05-01 | ENCE Academy      | W   | 0.727      | -            | -                | -                | -         |     6.57 | bajmi, Demho, ex1st, fr3nd, kadziu |
|           27 |     1603 | 2024-04-30 | EYEBALLERS        | L   | 0.720      | -            | -                | -                | -         |   -11.58 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           26 |     1640 | 2024-04-29 | Romania           | L   | 0.711      | -            | -                | -                | -         |   -13.82 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           25 |     1681 | 2024-04-27 | Permitta          | L   | 0.698      | -            | -                | -                | -         |   -10.34 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           24 |     1700 | 2024-04-26 | Insilio           | L   | 0.692      | -            | -                | -                | -         |   -10.48 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           23 |     1773 | 2024-04-23 | ALTERNATE aTTaX   | L   | 0.672      | -            | -                | -                | -         |   -10.63 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           22 |     1839 | 2024-04-20 | ALTERNATE aTTaX   | L   | 0.651      | -            | -                | -                | -         |    -9.85 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           21 |     1913 | 2024-04-18 | MOUZ NXT          | L   | 0.640      | -            | -                | -                | -         |    -7.24 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           20 |     1936 | 2024-04-18 | Romania           | W   | 0.638      | -            | -                | -                | -         |     7.21 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           19 |     1961 | 2024-04-17 | ENCE              | L   | 0.632      | -            | -                | -                | -         |    -1.46 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           18 |     2093 | 2024-04-11 | Sashi             | L   | 0.592      | -            | -                | -                | -         |    -6.28 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           17 |     2137 | 2024-04-10 | AMKAL             | W   | 0.585      | 0.384        | 0.135 (0.030)    | -                | -         |    12.44 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           16 |     2266 | 2024-04-06 | Slovakia          | L   | 0.558      | -            | -                | -                | -         |    -9.33 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           15 |     2357 | 2024-04-03 | Permitta          | W   | 0.540      | 0.384        | -                | 0.837 (0.174)    | -         |     8.16 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           14 |     2417 | 2024-04-01 | BLEED             | W   | 0.526      | 0.384        | 0.348 (0.070)    | 0.908 (0.183)    | -         |    14.98 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           13 |     2854 | 2024-03-09 | kONO              | L   | 0.373      | -            | -                | -                | -         |    -7.99 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           12 |     2864 | 2024-03-09 | Slovakia          | L   | 0.372      | -            | -                | -                | -         |    -6.79 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           11 |     2934 | 2024-03-06 | INGLORIOUS        | L   | 0.353      | -            | -                | -                | -         |   -10.32 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|           10 |     2940 | 2024-03-06 | Permitta          | L   | 0.352      | -            | -                | -                | -         |    -6.10 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|            9 |     3051 | 2024-03-02 | Slovakia          | W   | 0.325      | -            | -                | -                | -         |     4.15 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|            8 |     3364 | 2024-02-16 | SAW               | L   | 0.227      | -            | -                | -                | -         |    -1.37 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|            7 |     3398 | 2024-02-15 | BetBoom           | L   | 0.219      | -            | -                | -                | -         |    -0.18 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|            6 |     3425 | 2024-02-14 | Natus Vincere     | L   | 0.214      | -            | -                | -                | -         |    -0.04 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|            5 |     3437 | 2024-02-14 | AMKAL             | W   | 0.212      | -            | -                | -                | 1 (0.212) |     4.58 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|            4 |     3896 | 2024-01-20 | KOI               | W   | 0.047      | -            | -                | -                | -         |     1.09 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|            3 |     3956 | 2024-01-19 | ex-sYnck          | W   | 0.039      | -            | -                | -                | -         |     0.07 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|            2 |     4004 | 2024-01-18 | Aurora            | W   | 0.034      | -            | -                | -                | -         |     1.04 | bajmi, Demho, ex1st, fr3nd, TOAO   |
|            1 |     4016 | 2024-01-18 | Astralis          | L   | 0.033      | -            | -                | -                | -         |    -0.01 | bajmi, Demho, ex1st, fr3nd, TOAO   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,709.61)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-06-13 |      1.000 | $5,447.00      | $5,447.00       |
| 2024-06-06 |      0.965 | $3,000.00      | $2,895.88       |
| 2024-05-02 |      0.733 | $500.00        | $366.73         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
