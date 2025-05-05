### Roster Details<br />
Team Name: Take Flyte<br />
Roster: Crisp, huncho, Panic, REKMEISTER, Sharpie<br />
Global Rank: [246](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [72]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  528.1<br />
<br />
Final Rank Value (528.1) = Starting Rank Value (522.9) + Head To Head Adjustments (5.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.188[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.082[<sup>2</sup>](#table1)

The average of these factors is 0.068<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 522.9
- 400 + ( ( 0.068 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 522.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1351 | 2025-03-07 | Immigrants peek  | L   | 0.808      | -            | -                | -                | -         |   -10.34 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            6 |     1400 | 2025-03-06 | Complexity       | L   | 0.803      | -            | -                | -                | -         |    -0.14 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            5 |     1449 | 2025-03-05 | Aetheris         | W   | 0.795      | 0.143        | 0.004 (0.000)    | 0.112 (0.013)    | 0 (0.000) |    15.79 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            4 |     1533 | 2025-03-01 | Getting Info     | L   | 0.770      | -            | -                | -                | -         |    -3.28 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            3 |     1537 | 2025-03-01 | Graveyard Shift  | W   | 0.769      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.769) |     8.06 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            2 |     2716 | 2024-12-07 | Fisher College   | L   | 0.208      | -            | -                | -                | -         |    -1.62 | Crisp, huncho, Jpp, Orb1t, Sharpie        |
|            1 |     2743 | 2024-12-06 | Party Astronauts | L   | 0.203      | -            | -                | -                | -         |    -3.31 | Crisp, huncho, Jpp, Orb1t, Sharpie        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
