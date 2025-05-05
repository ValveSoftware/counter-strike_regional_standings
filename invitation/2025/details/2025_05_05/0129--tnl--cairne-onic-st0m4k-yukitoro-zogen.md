### Roster Details<br />
Team Name: TNL<br />
Roster: cairne, onic, St0m4k, yukitoro, zogeN<br />
Global Rank: [129](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [80]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  674.6<br />
<br />
Final Rank Value (674.6) = Starting Rank Value (669.9) + Head To Head Adjustments (4.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.276[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.149<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 669.9
- 400 + ( ( 0.149 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 669.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2486 | 2024-12-22 | kONO         | L   | 0.307      | -            | -                | -                | -         |    -5.36 | cairne, onic, St0m4k, yukitoro, zogeN |
|            6 |     2544 | 2024-12-17 | FAVBET       | L   | 0.274      | -            | -                | -                | -         |    -4.26 | cairne, onic, St0m4k, yukitoro, zogeN |
|            5 |     2556 | 2024-12-16 | Dragon EC    | W   | 0.267      | 0.382        | 0.002 (0.000)    | 0.010 (0.001)    | 0 (0.000) |     3.22 | cairne, onic, St0m4k, yukitoro, zogeN |
|            4 |     2673 | 2024-12-09 | TNL          | W   | 0.221      | 0.382        | 0.040 (0.003)    | 0.897 (0.076)    | 0 (0.000) |     6.00 | cairne, onic, St0m4k, yukitoro, zogeN |
|            3 |     2950 | 2024-11-27 | Iberian Soul | L   | 0.140      | -            | -                | -                | -         |    -1.11 | cairne, onic, St0m4k, yukitoro, zogeN |
|            2 |     2965 | 2024-11-26 | NAVI Junior  | W   | 0.133      | 0.333        | 0.456 (0.020)    | 1.000 (0.044)    | 0 (0.000) |     3.94 | cairne, onic, St0m4k, yukitoro, zogeN |
|            1 |     2991 | 2024-11-24 | Monte        | W   | 0.119      | 0.333        | 0.005 (0.000)    | 0.493 (0.020)    | 0 (0.000) |     2.27 | cairne, onic, St0m4k, yukitoro, zogeN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,891.60)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-22 |      0.307 | $478.00        | $146.80         |
| 2024-12-17 |      0.274 | $4,835.00      | $1,324.88       |
| 2024-11-27 |      0.140 | $3,000.00      | $419.91         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
