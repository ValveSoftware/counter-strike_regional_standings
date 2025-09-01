### Roster Details<br />
Team Name: Fisher College<br />
Roster: AlekS, corn, CrePoW, ReFuZR, tatm<br />
Global Rank: [253](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [131]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  484.8<br />
<br />
Final Rank Value (484.8) = Starting Rank Value (483.5) + Head To Head Adjustments (1.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.173[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.044<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 483.5
- 400 + ( ( 0.044 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 483.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     3831 | 2025-03-08 | Wildcard      | L   | 0.022      | -            | -                | -                | -         |    -0.05 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            5 |     3837 | 2025-03-08 | Vagrants      | W   | 0.022      | 0.769        | 0.003 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.47 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            4 |     3902 | 2025-03-07 | MIGHT         | W   | 0.016      | 0.769        | 0.000 (0.000)    | 0.224 (0.003)    | 0 (0.000) |     0.36 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            3 |     3919 | 2025-03-07 | Marsborne     | W   | 0.015      | 0.769        | 0.010 (0.000)    | 0.608 (0.007)    | 0 (0.000) |     0.42 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            2 |     3997 | 2025-03-06 | Davai Napadai | W   | 0.007      | 0.769        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.09 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            1 |     4027 | 2025-03-05 | MCS           | L   | 0.002      | -            | -                | -                | -         |    -0.03 | AlekS, corn, CrePoW, ReFuZR, tatm |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
