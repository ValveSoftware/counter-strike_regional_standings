### Roster Details<br />
Team Name: InControl<br />
Roster: Beast, jsfeltner, Oczarka, Scorchyy, TyRa<br />
Global Rank: [283](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [88]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  437.2<br />
<br />
Final Rank Value (437.2) = Starting Rank Value (477.7) + Head To Head Adjustments (-40.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.169[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.043<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 477.7
- 400 + ( ( 0.043 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 477.7


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
|            7 |      725 | 2025-03-28 | regain             | L   | 0.949      | -            | -                | -                | -         |   -12.00 | Beast, jsfeltner, Oczarka, Scorchyy, TyRa |
|            6 |      774 | 2025-03-27 | Bad News Capybaras | L   | 0.943      | -            | -                | -                | -         |   -12.45 | Beast, jsfeltner, Oczarka, Scorchyy, TyRa |
|            5 |     1354 | 2025-03-07 | Nouns              | L   | 0.808      | -            | -                | -                | -         |    -4.57 | Beast, DYLAN, jsfeltner, toxsty, TyRa     |
|            4 |     1406 | 2025-03-06 | Getting Info       | L   | 0.802      | -            | -                | -                | -         |   -12.16 | Beast, DYLAN, jsfeltner, toxsty, TyRa     |
|            3 |     2000 | 2025-02-10 | LOBOARMY           | L   | 0.641      | -            | -                | -                | -         |    -5.08 | Beast, DYLAN, jsfeltner, milo, TyRa       |
|            2 |     2038 | 2025-02-09 | LFO 4              | L   | 0.635      | -            | -                | -                | -         |    -7.60 | Beast, DYLAN, jsfeltner, TyRa, Wilky      |
|            1 |     2082 | 2025-02-08 | FlyQuest RED       | W   | 0.628      | 0.143        | 0.001 (0.000)    | 0.277 (0.025)    | 0 (0.000) |    13.39 | Beast, DYLAN, jsfeltner, milo, TyRa       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
