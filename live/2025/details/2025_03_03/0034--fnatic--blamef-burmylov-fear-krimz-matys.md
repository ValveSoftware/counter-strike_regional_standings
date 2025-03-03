### Roster Details<br />
Team Name: fnatic<br />
Roster: blameF, Burmylov, fear, KRIMZ, MATYS<br />
Global Rank: [34](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [23]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  1023.0<br />
<br />
Final Rank Value (1023.0) = Starting Rank Value (1032.1) + Head To Head Adjustments (-9.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.456[<sup>1</sup>](#table2)
- Bounty Collected: 0.364[<sup>2</sup>](#table1)
- Opponent Network: 0.245[<sup>2</sup>](#table1)
- LAN Wins: 0.247[<sup>2</sup>](#table1)

The average of these factors is 0.328<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1032.1
- 400 + ( ( 0.328 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 1032.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |      173 | 2025-02-20 | ECLOT          | L   | 1.000      | -            | -                | -                | -         |   -16.25 | blameF, Burmylov, fear, KRIMZ, MATYS |
|           30 |      217 | 2025-02-17 | RUSH B         | W   | 1.000      | 0.435        | 0.027 (0.012)    | 0.578 (0.251)    | 0 (0.000) |     8.40 | blameF, Burmylov, fear, KRIMZ, MATYS |
|           29 |      246 | 2025-02-15 | Monte          | L   | 1.000      | -            | -                | -                | -         |   -23.80 | blameF, Burmylov, fear, KRIMZ, MATYS |
|           28 |      312 | 2025-02-13 | 500            | W   | 1.000      | 0.435        | 0.092 (0.040)    | 1.000 (0.435)    | 0 (0.000) |    16.21 | blameF, Burmylov, fear, KRIMZ, MATYS |
|           27 |      335 | 2025-02-12 | Partizan       | L   | 1.000      | -            | -                | -                | -         |   -16.39 | blameF, Burmylov, fear, KRIMZ, MATYS |
|           26 |      399 | 2025-02-10 | ECSTATIC       | W   | 1.000      | 0.435        | 0.032 (0.014)    | 1.000 (0.435)    | 0 (0.000) |     6.89 | blameF, Burmylov, fear, KRIMZ, MATYS |
|           25 |      535 | 2025-02-06 | Spirit Academy | W   | 1.000      | 0.435        | 0.067 (0.029)    | 0.694 (0.301)    | 0 (0.000) |    13.00 | blameF, Burmylov, fear, KRIMZ, MATYS |
|           24 |      603 | 2025-02-04 | Apogee         | W   | 1.000      | 0.435        | 0.012 (0.005)    | 0.709 (0.308)    | -         |     9.96 | blameF, Burmylov, fear, KRIMZ, MATYS |
|           23 |      642 | 2025-02-01 | OG             | W   | 0.999      | 0.435        | 0.061 (0.026)    | 1.000 (0.434)    | -         |     9.58 | blameF, Burmylov, fear, KRIMZ, MATYS |
|           22 |      713 | 2025-01-14 | Spirit         | L   | 0.881      | -            | -                | -                | -         |    -0.13 | blameF, Burmylov, fear, KRIMZ, MATYS |
|           21 |     1183 | 2024-12-01 | Rare Atom      | L   | 0.584      | -            | -                | -                | -         |   -13.08 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           20 |     1215 | 2024-11-30 | Cloud9         | L   | 0.578      | -            | -                | -                | -         |   -13.02 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           19 |     1218 | 2024-11-29 | Wildcard       | L   | 0.577      | -            | -                | -                | -         |    -4.86 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           18 |     1411 | 2024-11-20 | ECLOT          | W   | 0.511      | 0.143        | 0.129 (0.009)    | 0.762 (0.056)    | 1 (0.511) |     7.99 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           17 |     1422 | 2024-11-19 | FaZe           | L   | 0.505      | -            | -                | -                | -         |    -0.14 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           16 |     1436 | 2024-11-17 | BetBoom        | W   | 0.497      | 0.143        | 0.102 (0.007)    | 0.479 (0.034)    | 1 (0.497) |     6.75 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           15 |     1454 | 2024-11-17 | Rebels         | W   | 0.492      | -            | -                | -                | 1 (0.492) |     2.24 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           14 |     1466 | 2024-11-16 | Natus Vincere  | L   | 0.490      | -            | -                | -                | -         |    -0.34 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           13 |     1965 | 2024-10-26 | Falcons        | L   | 0.346      | -            | -                | -                | -         |    -0.09 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           12 |     1993 | 2024-10-25 | Cloud9         | W   | 0.339      | -            | -                | -                | -         |     2.77 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           11 |     2020 | 2024-10-22 | The MongolZ    | L   | 0.321      | -            | -                | -                | -         |    -0.07 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           10 |     2023 | 2024-10-22 | 9z             | W   | 0.319      | -            | -                | -                | -         |     1.89 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|            9 |     2088 | 2024-10-19 | Nemiga         | L   | 0.298      | -            | -                | -                | -         |    -5.00 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|            8 |     2129 | 2024-10-17 | PARIVISION     | W   | 0.287      | -            | -                | -                | 1 (0.287) |     1.37 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|            7 |     2162 | 2024-10-16 | BC.Game        | W   | 0.281      | 0.624        | 0.076 (0.013)    | 0.906 (0.159)    | 1 (0.281) |     4.09 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|            6 |     2256 | 2024-10-10 | Metizport      | L   | 0.239      | -            | -                | -                | -         |    -3.56 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|            5 |     2892 | 2024-09-24 | WildLotus      | L   | 0.133      | -            | -                | -                | -         |    -3.47 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|            4 |     3198 | 2024-09-14 | MOUZ           | L   | 0.065      | -            | -                | -                | -         |    -0.01 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            3 |     3252 | 2024-09-12 | BIG            | L   | 0.054      | -            | -                | -                | -         |    -0.20 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            2 |     3279 | 2024-09-11 | M80            | L   | 0.048      | -            | -                | -                | -         |    -1.03 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            1 |     3324 | 2024-09-10 | Astralis       | W   | 0.039      | 0.889        | 0.632 (0.022)    | 1.000 (0.035)    | 1 (0.039) |     1.22 | afro, blameF, bodyy, KRIMZ, MATYS    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,469.60)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.598 | $10,000.00     | $5,984.12       |
| 2024-10-26 |      0.348 | $20,000.00     | $6,964.76       |
| 2024-10-19 |      0.301 | $25,000.00     | $7,527.34       |
| 2024-09-26 |      0.147 | $1,000.00      | $146.87         |
| 2024-09-22 |      0.121 | $7,000.00      | $846.52         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
