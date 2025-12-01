### Roster Details<br />
Team Name: Reactor 9<br />
Roster: bones, Kermi, neight<br />
Global Rank: [245](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_12_01.md)<br />
Regional Rank: [68]( ../../standings_americas_2025_12_01.md)<br />
<br />
Final Rank Value:  540.5<br />
<br />
Final Rank Value (540.5) = Starting Rank Value (504.5) + Head To Head Adjustments (36.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.202[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 504.5
- 400 + ( ( 0.055 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 504.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      472 | 2025-11-09 | SAW        | L   | 1.000      | -            | -                | -                | -         |    -0.08 | bones, cmrn, Kermi, neight, Signal |
|            4 |      488 | 2025-11-08 | Take Flyte | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.269 (0.090)    | 1 (1.000) |    18.22 | bones, cmrn, Kermi, neight, Signal |
|            3 |      494 | 2025-11-08 | Marsborne  | L   | 1.000      | -            | -                | -                | -         |    -1.07 | bones, cmrn, Kermi, neight, Signal |
|            2 |      500 | 2025-11-08 | Take Flyte | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.269 (0.090)    | 1 (1.000) |    19.44 | bones, cmrn, Kermi, neight, Signal |
|            1 |     2838 | 2025-09-06 | ODDIK      | L   | 0.627      | -            | -                | -                | -         |    -0.52 | bones, ditt, Kermi, neight, vin3   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
