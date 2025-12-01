### Roster Details<br />
Team Name: MASONIC<br />
Roster: Avou, Botman, Bukhavez, KralleJ, Noruyp<br />
Global Rank: [152](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [100]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  747.2<br />
<br />
Final Rank Value (747.2) = Starting Rank Value (702.1) + Head To Head Adjustments (45.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.277[<sup>2</sup>](#table1)
- Opponent Network: 0.055[<sup>2</sup>](#table1)
- LAN Wins: 0.303[<sup>2</sup>](#table1)

The average of these factors is 0.159<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 702.1
- 400 + ( ( 0.159 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 702.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      553 | 2025-11-07 | Metizport     | L   | 1.000      | -            | -                | -                | -         |    -5.69 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           10 |      576 | 2025-11-07 | FUT Academy   | W   | 1.000      | 0.335        | 0.001 (0.000)    | 0.038 (0.013)    | 1 (1.000) |     8.26 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            9 |      589 | 2025-11-07 | EYEBALLERS    | W   | 1.000      | 0.335        | 0.068 (0.023)    | 1.000 (0.335)    | 1 (1.000) |    29.58 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            8 |      605 | 2025-11-07 | ENCE          | L   | 1.000      | -            | -                | -                | -         |    -0.88 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            7 |      618 | 2025-11-07 | Falcons Force | L   | 1.000      | -            | -                | -                | -         |   -25.71 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            6 |      637 | 2025-11-07 | MOUZ NXT      | W   | 1.000      | 0.335        | 0.003 (0.001)    | 0.328 (0.110)    | 1 (1.000) |    21.14 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            5 |      717 | 2025-11-04 | FORZE Reload  | L   | 1.000      | -            | -                | -                | -         |    -7.89 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            4 |      790 | 2025-11-01 | Alliance      | L   | 1.000      | -            | -                | -                | -         |    -1.73 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            3 |      865 | 2025-10-29 | ENCE Academy  | W   | 0.980      | 0.143        | 0.005 (0.001)    | 0.488 (0.068)    | 0 (0.000) |    20.59 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            2 |      936 | 2025-10-27 | ALGO          | W   | 0.967      | 0.143        | 0.000 (0.000)    | 0.182 (0.025)    | 0 (0.000) |     9.33 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            1 |     1048 | 2025-10-25 | GUN5          | L   | 0.953      | -            | -                | -                | -         |    -1.88 | Avou, Botman, Bukhavez, KralleJ, Noruyp |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
