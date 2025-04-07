### Roster Details<br />
Team Name: InControl<br />
Roster: Beast, jsfeltner, Oczarka, Scorchyy, TyRa<br />
Global Rank: [267](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [85]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  444.6<br />
<br />
Final Rank Value (444.6) = Starting Rank Value (487.2) + Head To Head Adjustments (-42.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.189[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 487.2
- 400 + ( ( 0.047 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 487.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      206 | 2025-03-28 | regain             | L   | 1.000      | -            | -                | -                | -         |   -12.70 | Beast, jsfeltner, Oczarka, Scorchyy, TyRa |
|            6 |      255 | 2025-03-27 | Bad News Capybaras | L   | 1.000      | -            | -                | -                | -         |   -10.40 | Beast, jsfeltner, Oczarka, Scorchyy, TyRa |
|            5 |      732 | 2025-03-07 | Nouns              | L   | 0.994      | -            | -                | -                | -         |    -5.12 | Beast, DYLAN, jsfeltner, toxsty, TyRa     |
|            4 |      782 | 2025-03-06 | Getting Info       | L   | 0.989      | -            | -                | -                | -         |   -14.88 | Beast, DYLAN, jsfeltner, toxsty, TyRa     |
|            3 |     1314 | 2025-02-10 | LOBOARMY           | L   | 0.828      | -            | -                | -                | -         |    -6.87 | Beast, DYLAN, jsfeltner, milo, TyRa       |
|            2 |     1352 | 2025-02-09 | LFO 4              | L   | 0.821      | -            | -                | -                | -         |    -8.76 | Beast, DYLAN, jsfeltner, TyRa, Wilky      |
|            1 |     1396 | 2025-02-08 | FlyQuest RED       | W   | 0.815      | 0.143        | 0.004 (0.001)    | 0.003 (0.000)    | 0 (0.000) |    16.14 | Beast, DYLAN, jsfeltner, milo, TyRa       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
