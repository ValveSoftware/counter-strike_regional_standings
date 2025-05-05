### Roster Details<br />
Team Name: Galorys<br />
Roster: Alisson, bacc, divine, kadzz, pepe<br />
Global Rank: [276](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [83]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  470.5<br />
<br />
Final Rank Value (470.5) = Starting Rank Value (484.5) + Head To Head Adjustments (-14.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.185[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 484.5
- 400 + ( ( 0.047 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 484.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      737 | 2025-03-28 | VELOX        | L   | 0.948      | -            | -                | -                | -         |   -16.06 | Alisson, bacc, divine, kadzz, pepe |
|            6 |      797 | 2025-03-27 | Solid        | L   | 0.942      | -            | -                | -                | -         |    -5.81 | Alisson, bacc, divine, kadzz, pepe |
|            5 |     1216 | 2025-03-09 | Dusty Roots  | L   | 0.821      | -            | -                | -                | -         |    -7.62 | Alisson, bacc, divine, kadzz, pepe |
|            4 |     1285 | 2025-03-08 | thekillaz fe | W   | 0.814      | 0.143        | 0.003 (0.000)    | 0.138 (0.016)    | 0 (0.000) |    16.76 | Alisson, bacc, divine, kadzz, pepe |
|            3 |     1344 | 2025-03-07 | Legacy       | L   | 0.808      | -            | -                | -                | -         |    -1.86 | Alisson, bacc, divine, kadzz, pepe |
|            2 |     2076 | 2025-02-08 | NITRO        | L   | 0.628      | -            | -                | -                | -         |    -6.79 | Alisson, bacc, divine, kadzz, pepe |
|            1 |     2131 | 2025-02-07 | 2070         | W   | 0.622      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.40 | Alisson, bacc, divine, kadzz, pepe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
