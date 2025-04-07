### Roster Details<br />
Team Name: Tricked<br />
Roster: leakz, Nodios, Queenix, salazar, valde<br />
Global Rank: [209](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [126]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  595.6<br />
<br />
Final Rank Value (595.6) = Starting Rank Value (516.9) + Head To Head Adjustments (78.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.227[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.063<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 516.9
- 400 + ( ( 0.063 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 516.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      363 | 2025-03-22 | Leo               | L   | 1.000      | -            | -                | -                | -         |    -8.93 | leakz, Nodios, Queenix, salazar, valde |
|            9 |      366 | 2025-03-22 | Betera            | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.161 (0.023)    | 0 (0.000) |     8.41 | leakz, Nodios, Queenix, salazar, valde |
|            8 |      374 | 2025-03-22 | Nuclear TigeRES   | W   | 1.000      | 0.143        | 0.006 (0.001)    | 0.196 (0.028)    | 0 (0.000) |    17.14 | leakz, Nodios, Queenix, salazar, valde |
|            7 |      929 | 2025-03-01 | ECSTATIC          | L   | 0.952      | -            | -                | -                | -         |    -5.95 | Nodios, Queenix, roeJ, salazar, valde  |
|            6 |      943 | 2025-02-28 | ESC               | W   | 0.945      | 0.143        | 0.000 (0.000)    | 0.150 (0.020)    | 0 (0.000) |    13.70 | Nodios, Queenix, roeJ, salazar, valde  |
|            5 |      993 | 2025-02-25 | Ninjas in Pyjamas | W   | 0.925      | 0.143        | 0.000 (0.000)    | 0.851 (0.113)    | 0 (0.000) |    19.13 | Nodios, Queenix, roeJ, salazar, valde  |
|            4 |     1010 | 2025-02-24 | OG                | L   | 0.920      | -            | -                | -                | -         |    -2.37 | Nodios, Queenix, roeJ, salazar, valde  |
|            3 |     1075 | 2025-02-21 | CYBERSHOKE        | L   | 0.901      | -            | -                | -                | -         |    -4.30 | leakz, niko, Queenix, salazar, valde   |
|            2 |     1082 | 2025-02-21 | Dark Cloud        | W   | 0.901      | 0.143        | 0.018 (0.002)    | 0.218 (0.028)    | 0 (0.000) |    19.11 | leakz, niko, Queenix, salazar, valde   |
|            1 |     1092 | 2025-02-21 | CPH Wolves        | W   | 0.900      | 0.143        | 0.006 (0.001)    | 0.453 (0.058)    | 0 (0.000) |    22.80 | leakz, niko, Queenix, salazar, valde   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
