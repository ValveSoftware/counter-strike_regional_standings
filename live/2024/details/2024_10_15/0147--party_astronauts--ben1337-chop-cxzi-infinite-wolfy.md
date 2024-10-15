### Roster Details<br />
Team Name: Party Astronauts<br />
Roster: ben1337, chop, cxzi, Infinite, WolfY<br />
Global Rank: [147](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_15.md)<br />
Regional Rank: [39]( ../../standings_americas_2024_10_15.md)<br />
<br />
Final Rank Value:  720.3<br />
<br />
Final Rank Value (720.3) = Starting Rank Value (701.7) + Head To Head Adjustments (18.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.326[<sup>1</sup>](#table2)
- Bounty Collected: 0.263[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.006[<sup>2</sup>](#table1)

The average of these factors is 0.155<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 701.7
- 400 + ( ( 0.155 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 701.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     4263 | 2024-05-18 | NRG           | L   | 0.202      | -            | -                | -                | -         |    -1.65 | ben1337, chop, cxzi, Infinite, WolfY |
|           18 |     4295 | 2024-05-17 | Legacy        | W   | 0.196      | 0.303        | 0.059 (0.004)    | 0.710 (0.042)    | 0 (0.000) |     4.76 | ben1337, chop, cxzi, Infinite, WolfY |
|           17 |     4324 | 2024-05-16 | FLUFFY AIMERS | W   | 0.190      | 0.477        | 0.016 (0.001)    | 0.536 (0.049)    | 0 (0.000) |     3.85 | ben1337, chop, cxzi, Infinite, WolfY |
|           16 |     4327 | 2024-05-16 | FLUFFY AIMERS | W   | 0.190      | 0.477        | 0.016 (0.001)    | 0.536 (0.048)    | 0 (0.000) |     3.90 | ben1337, chop, cxzi, Infinite, WolfY |
|           15 |     4417 | 2024-05-14 | Mythic        | W   | 0.176      | 0.477        | 0.004 (0.000)    | 0.260 (0.022)    | 0 (0.000) |     3.15 | ben1337, chop, cxzi, RUSH, WolfY     |
|           14 |     4425 | 2024-05-14 | Mythic        | L   | 0.176      | -            | -                | -                | -         |    -2.44 | ben1337, chop, cxzi, RUSH, WolfY     |
|           13 |     4518 | 2024-05-11 | BOSS          | L   | 0.155      | -            | -                | -                | -         |    -1.42 | ben1337, chop, cxzi, RUSH, WolfY     |
|           12 |     4524 | 2024-05-11 | Phoenix       | L   | 0.155      | -            | -                | -                | -         |    -2.72 | ben1337, chop, cxzi, RUSH, WolfY     |
|           11 |     4580 | 2024-05-08 | LAG           | W   | 0.137      | 0.477        | 0.003 (0.000)    | 0.052 (0.003)    | 0 (0.000) |     1.74 | ben1337, chop, cxzi, RUSH, WolfY     |
|           10 |     4585 | 2024-05-08 | LAG           | W   | 0.136      | 0.477        | 0.003 (0.000)    | 0.052 (0.003)    | 0 (0.000) |     1.75 | ben1337, chop, cxzi, RUSH, WolfY     |
|            9 |     4605 | 2024-05-07 | timbermen     | L   | 0.130      | -            | -                | -                | -         |    -0.53 | ben1337, chop, cxzi, RUSH, WolfY     |
|            8 |     4606 | 2024-05-07 | timbermen     | W   | 0.130      | 0.477        | 0.028 (0.002)    | 0.519 (0.032)    | 0 (0.000) |     3.58 | ben1337, chop, cxzi, RUSH, WolfY     |
|            7 |     4624 | 2024-05-06 | NRG           | L   | 0.123      | -            | -                | -                | -         |    -1.01 | ben1337, chop, cxzi, RUSH, WolfY     |
|            6 |     4625 | 2024-05-06 | NRG           | W   | 0.123      | 0.477        | 0.035 (0.002)    | 0.515 (0.030)    | 0 (0.000) |     2.89 | ben1337, chop, cxzi, RUSH, WolfY     |
|            5 |     4696 | 2024-05-02 | Wildcard      | L   | 0.096      | -            | -                | -                | -         |    -0.27 | ben1337, chop, cxzi, RUSH, WolfY     |
|            4 |     4697 | 2024-05-02 | Wildcard      | W   | 0.096      | 0.477        | 0.109 (0.005)    | 0.563 (0.026)    | 0 (0.000) |     2.76 | ben1337, chop, cxzi, RUSH, WolfY     |
|            3 |     4833 | 2024-04-27 | Aurora        | L   | 0.058      | -            | -                | -                | -         |    -0.10 | ben1337, chop, cxzi, RUSH, WolfY     |
|            2 |     4835 | 2024-04-26 | sunday school | W   | 0.057      | 0.500        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.057) |     0.46 | ben1337, chop, cxzi, RUSH, WolfY     |
|            1 |     4861 | 2024-04-25 | Aurora        | L   | 0.050      | -            | -                | -                | -         |    -0.08 | ben1337, chop, cxzi, RUSH, WolfY     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,646.64)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.350 | $7,000.00      | $2,450.05       |
| 2024-04-28 |      0.066 | $3,000.00      | $196.58         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
