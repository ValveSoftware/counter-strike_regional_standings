### Roster Details<br />
Team Name: Astralis Talent<br />
Roster: ANSG1, kiR, kroK, suma, Zanto<br />
Global Rank: [160](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [108]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  699.3<br />
<br />
Final Rank Value (699.3) = Starting Rank Value (751.8) + Head To Head Adjustments (-52.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.296[<sup>1</sup>](#table2)
- Bounty Collected: 0.266[<sup>2</sup>](#table1)
- Opponent Network: 0.069[<sup>2</sup>](#table1)
- LAN Wins: 0.104[<sup>2</sup>](#table1)

The average of these factors is 0.184<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 751.8
- 400 + ( ( 0.184 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 751.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |        7 | 2024-12-18 | Heimo             | L   | 1.000      | -            | -                | -                | -         |   -17.06 | ANSG1, kiR, kroK, suma, Zanto |
|           31 |      383 | 2024-11-29 | ENCE Academy      | L   | 1.000      | -            | -                | -                | -         |   -14.18 | ANSG1, kiR, kroK, suma, Zanto |
|           30 |      402 | 2024-11-28 | GenOne            | L   | 1.000      | -            | -                | -                | -         |   -14.96 | ANSG1, kiR, kroK, sSen, suma  |
|           29 |      429 | 2024-11-26 | Apogee            | L   | 1.000      | -            | -                | -                | -         |   -12.18 | ANSG1, kiR, kroK, sSen, suma  |
|           28 |      453 | 2024-11-24 | GenOne            | W   | 1.000      | 0.333        | 0.014 (0.005)    | 0.450 (0.150)    | 0 (0.000) |    16.58 | ANSG1, kiR, kroK, sSen, suma  |
|           27 |      473 | 2024-11-23 | WOPA              | L   | 1.000      | -            | -                | -                | -         |   -12.59 | ANSG1, kiR, kroK, sSen, suma  |
|           26 |      477 | 2024-11-23 | Denial            | W   | 1.000      | 0.340        | 0.002 (0.001)    | 0.040 (0.014)    | 1 (1.000) |     7.14 | ANSG1, kiR, kroK, sSen, suma  |
|           25 |      501 | 2024-11-22 | L&G               | L   | 1.000      | -            | -                | -                | -         |   -10.20 | ANSG1, kiR, kroK, sSen, suma  |
|           24 |      620 | 2024-11-16 | Fire Flux         | L   | 0.986      | -            | -                | -                | -         |   -10.51 | ANSG1, kiR, kroK, sSen, suma  |
|           23 |      634 | 2024-11-15 | EYEBALLERS        | W   | 0.980      | 0.143        | 0.014 (0.002)    | 0.423 (0.059)    | 0 (0.000) |    16.34 | ANSG1, kiR, kroK, sSen, suma  |
|           22 |      670 | 2024-11-14 | WOPA              | L   | 0.974      | -            | -                | -                | -         |   -12.56 | ANSG1, kiR, kroK, sSen, suma  |
|           21 |      680 | 2024-11-14 | Sashi Academy     | W   | 0.973      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.54 | ANSG1, kiR, kroK, sSen, suma  |
|           20 |      687 | 2024-11-14 | GenOne            | L   | 0.972      | -            | -                | -                | -         |   -13.87 | ANSG1, kiR, kroK, sSen, suma  |
|           19 |      722 | 2024-11-13 | CPH Wolves        | W   | 0.965      | 0.333        | 0.010 (0.003)    | 0.567 (0.182)    | 0 (0.000) |    17.31 | ANSG1, kiR, kroK, sSen, suma  |
|           18 |      762 | 2024-11-12 | CS2News           | W   | 0.958      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     3.57 | ANSG1, kiR, kroK, sSen, suma  |
|           17 |      790 | 2024-11-11 | EYEBALLERS        | L   | 0.952      | -            | -                | -                | -         |   -13.61 | ANSG1, kiR, kroK, sSen, suma  |
|           16 |      834 | 2024-11-09 | Illuminar         | W   | 0.938      | 0.333        | 0.015 (0.005)    | 0.509 (0.159)    | 0 (0.000) |    20.24 | ANSG1, kiR, kroK, sSen, suma  |
|           15 |     1871 | 2024-09-26 | Alliance          | L   | 0.647      | -            | -                | -                | -         |    -5.97 | ANSG1, kiR, kroK, sSen, suma  |
|           14 |     1877 | 2024-09-26 | Lazer Cats        | W   | 0.646      | 0.143        | 0.002 (0.000)    | 0.024 (0.002)    | 0 (0.000) |     7.37 | ANSG1, kiR, kroK, sSen, suma  |
|           13 |     2262 | 2024-09-15 | Apogee            | L   | 0.571      | -            | -                | -                | -         |    -7.76 | ANSG1, kiR, kroK, sSen, suma  |
|           12 |     2285 | 2024-09-14 | ADEPTS            | W   | 0.565      | 0.333        | -                | 0.022 (0.004)    | 0 (0.000) |     2.24 | ANSG1, kiR, kroK, sSen, suma  |
|           11 |     2354 | 2024-09-12 | CPH Wolves        | W   | 0.552      | 0.333        | 0.010 (0.002)    | 0.567 (0.104)    | 0 (0.000) |    11.13 | ANSG1, kiR, kroK, sSen, suma  |
|           10 |     2390 | 2024-09-11 | NAVI Junior       | L   | 0.545      | -            | -                | -                | -         |    -2.64 | ANSG1, kiR, kroK, sSen, suma  |
|            9 |     3468 | 2024-08-09 | Into the Breach   | L   | 0.325      | -            | -                | -                | -         |    -2.95 | ANSG1, kiR, kroK, sSen, suma  |
|            8 |     3496 | 2024-08-08 | ex-Enterprise     | L   | 0.318      | -            | -                | -                | -         |    -2.90 | ANSG1, kiR, kroK, sSen, suma  |
|            7 |     3719 | 2024-08-02 | RUSH B            | L   | 0.278      | -            | -                | -                | -         |    -3.10 | ANSG1, kiR, kroK, sSen, suma  |
|            6 |     3908 | 2024-07-28 | GUN5              | L   | 0.246      | -            | -                | -                | -         |    -1.41 | ANSG1, kiR, kroK, sSen, suma  |
|            5 |     3963 | 2024-07-26 | Passion UA        | L   | 0.232      | -            | -                | -                | -         |    -0.51 | ANSG1, kiR, kroK, sSen, suma  |
|            4 |     4019 | 2024-07-24 | Aurora Young Blud | L   | 0.221      | -            | -                | -                | -         |    -1.82 | ANSG1, kiR, kroK, sSen, suma  |
|            3 |     4093 | 2024-07-22 | GenOne            | W   | 0.206      | 0.143        | 0.014 (0.000)    | 0.450 (0.013)    | -         |     3.50 | ANSG1, kiR, kroK, sSen, suma  |
|            2 |     4247 | 2024-07-18 | GL Academy        | W   | 0.179      | -            | -                | -                | -         |     0.69 | ANSG1, kiR, kroK, sSen, suma  |
|            1 |     4297 | 2024-07-17 | 9INE              | L   | 0.174      | -            | -                | -                | -         |    -1.28 | ANSG1, kiR, kroK, sSen, suma  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,429.00)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
