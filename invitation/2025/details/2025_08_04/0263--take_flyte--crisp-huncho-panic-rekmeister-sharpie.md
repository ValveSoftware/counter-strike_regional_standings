### Roster Details<br />
Team Name: Take Flyte<br />
Roster: Crisp, huncho, Panic, REKMEISTER, Sharpie<br />
Global Rank: [263](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_04.md)<br />
Regional Rank: [85]( ../../standings_americas_2025_08_04.md)<br />
<br />
Final Rank Value:  479.0<br />
<br />
Final Rank Value (479.0) = Starting Rank Value (478.1) + Head To Head Adjustments (0.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.147[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.018[<sup>2</sup>](#table1)

The average of these factors is 0.041<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 478.1
- 400 + ( ( 0.041 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 478.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3233 | 2025-03-07 | Outfit 49       | L   | 0.201      | -            | -                | -                | -         |    -3.25 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            4 |     3284 | 2025-03-06 | Complexity      | L   | 0.196      | -            | -                | -                | -         |    -0.05 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            3 |     3335 | 2025-03-05 | Worms           | W   | 0.188      | 0.143        | 0.001 (0.000)    | 0.024 (0.001)    | 0 (0.000) |     3.97 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            2 |     3421 | 2025-03-01 | Getting Info    | L   | 0.163      | -            | -                | -                | -         |    -1.77 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            1 |     3425 | 2025-03-01 | Graveyard Shift | W   | 0.162      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.162) |     2.00 | Crisp, huncho, Panic, REKMEISTER, Sharpie |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
