### Roster Details<br />
Team Name: CYBERSHOKE<br />
Roster: FenomeN, levantino, lov1kus, notineki, sstiNiX<br />
Global Rank: [84](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [60]( ../standings_europe.md)<br />
<br />
Final Rank Value:  935.7<br />
<br />
Final Rank Value (935.7) = Starting Rank Value (896.3) + Head To Head Adjustments (39.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.415[<sup>1</sup>](#table2)
- Bounty Collected: 0.324[<sup>2</sup>](#table1)
- Opponent Network: 0.226[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.241<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 896.3
- 400 + ( ( 0.241 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 896.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |        1 | 2024-08-06 | Monte Gen        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.12 | FenomeN, levantino, lov1kus, notineki, sstiNiX |
|           27 |      112 | 2024-08-03 | PARIVISION       | L   | 1.000      | -            | -                | -                | -         |    -8.02 | FenomeN, levantino, lov1kus, notineki, sstiNiX |
|           26 |      272 | 2024-07-30 | Sampi            | L   | 1.000      | -            | -                | -                | -         |   -16.73 | FenomeN, levantino, lov1kus, notineki, sstiNiX |
|           25 |      291 | 2024-07-29 | 1WIN             | W   | 1.000      | 0.435        | 0.033 (0.014)    | 0.718 (0.312)    | 0 (0.000) |    18.44 | FenomeN, levantino, lov1kus, notineki, sstiNiX |
|           24 |      296 | 2024-07-29 | MOUZ NXT         | L   | 1.000      | -            | -                | -                | -         |    -8.30 | FenomeN, levantino, lov1kus, notineki, sstiNiX |
|           23 |      307 | 2024-07-29 | Sampi            | W   | 1.000      | 0.426        | 0.027 (0.011)    | 1.000 (0.426)    | 0 (0.000) |    15.01 | FenomeN, levantino, lov1kus, notineki, sstiNiX |
|           22 |      358 | 2024-07-27 | EYEBALLERS       | W   | 1.000      | 0.435        | 0.005 (0.002)    | 0.488 (0.212)    | 0 (0.000) |    11.29 | FenomeN, levantino, lov1kus, notineki, sstiNiX |
|           21 |      423 | 2024-07-25 | GUN5             | W   | 1.000      | 0.435        | 0.072 (0.031)    | 0.550 (0.239)    | 0 (0.000) |    15.59 | FenomeN, levantino, lov1kus, notineki, sstiNiX |
|           20 |      613 | 2024-07-19 | fnatic           | L   | 1.000      | -            | -                | -                | -         |    -1.57 | FenomeN, levantino, lov1kus, notineki, sstiNiX |
|           19 |      685 | 2024-07-18 | EYEBALLERS       | W   | 1.000      | 0.500        | 0.005 (0.003)    | 0.488 (0.244)    | 0 (0.000) |    13.61 | FenomeN, levantino, lov1kus, notineki, sstiNiX |
|           18 |      793 | 2024-07-16 | fnatic           | L   | 1.000      | -            | -                | -                | -         |    -1.28 | FenomeN, levantino, lov1kus, notineki, sstiNiX |
|           17 |     1052 | 2024-06-16 | Revenant         | W   | 0.860      | 0.143        | 0.027 (0.003)    | 0.259 (0.032)    | 0 (0.000) |    10.96 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|           16 |     1175 | 2024-06-13 | ARCRED           | L   | 0.838      | -            | -                | -                | -         |   -10.82 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|           15 |     1196 | 2024-06-12 | LEON             | W   | 0.833      | -            | -                | -                | 0 (0.000) |     6.77 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|           14 |     1220 | 2024-06-11 | Preasy           | W   | 0.826      | 0.143        | -                | 0.216 (0.026)    | 0 (0.000) |     9.52 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|           13 |     1240 | 2024-06-10 | Rhyno            | L   | 0.820      | -            | -                | -                | -         |    -8.72 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|           12 |     1283 | 2024-06-09 | EYEBALLERS       | W   | 0.813      | 0.500        | 0.005 (0.002)    | 0.488 (0.198)    | 0 (0.000) |    14.21 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|           11 |     1372 | 2024-06-08 | Sampi            | W   | 0.805      | 0.500        | 0.027 (0.011)    | 1.000 (0.402)    | -         |    14.88 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|           10 |     1429 | 2024-06-07 | Illuminar        | L   | 0.798      | -            | -                | -                | -         |   -13.47 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|            9 |     1491 | 2024-06-06 | DMS              | W   | 0.792      | 0.500        | 0.003 (0.001)    | 0.428 (0.169)    | -         |    15.81 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|            8 |     1527 | 2024-06-05 | GUN5             | L   | 0.787      | -            | -                | -                | -         |    -8.17 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|            7 |     1573 | 2024-06-04 | Zero Tenacity    | L   | 0.780      | -            | -                | -                | -         |    -4.47 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|            6 |     1579 | 2024-06-04 | Nemiga           | L   | 0.780      | -            | -                | -                | -         |    -4.80 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|            5 |     1605 | 2024-06-03 | Grannys Knockers | L   | 0.773      | -            | -                | -                | -         |   -15.04 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|            4 |     1648 | 2024-06-01 | K10              | W   | 0.761      | -            | -                | -                | -         |     5.97 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|            3 |     1694 | 2024-05-31 | HOTU             | W   | 0.753      | 0.372        | 0.007 (0.002)    | -                | -         |     5.69 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|            2 |     1757 | 2024-05-28 | VP.Prodigy       | L   | 0.734      | -            | -                | -                | -         |   -10.30 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |
|            1 |     2288 | 2024-05-11 | DMS              | L   | 0.620      | -            | -                | -                | -         |    -9.81 | FenomeN, kelieN, lov1kus, notineki, sstiNiX    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,476.16)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.859 | $2,500.00      | $2,148.44       |
| 2024-06-11 |      0.826 | $12,500.00     | $10,327.72      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
