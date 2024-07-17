### Roster Details<br />
Team Name: Rare Atom<br />
Roster: expro, kory, phzy, somebody, Summer<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [163](../standings_global.md)<br />
Regional Rank: [13]( ../standings_asia.md)<br />
Final Rank Value:  690.2<br />
<br />
Final Rank Value (690.2) = Starting Rank Value (684.6) + Head To Head Adjustments (5.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.317[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.133<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 684.6
- 400 + ( ( 0.133 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 684.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     3102 | 2024-03-06 | Cloud9      | L   | 0.313      | -            | -                | -                | -         |    -0.50 | expro, kory, phzy, somebody, Summer |
|           13 |     3798 | 2024-02-02 | GR          | W   | 0.093      | 0.143        | 0.012 (0.000)    | 0.065 (0.001)    | 0 (0.000) |     1.54 | expro, kory, phzy, somebody, Summer |
|           12 |     3803 | 2024-02-02 | TYLOO       | W   | 0.092      | 0.143        | 0.032 (0.000)    | 0.141 (0.002)    | 0 (0.000) |     2.03 | expro, kory, phzy, somebody, Summer |
|           11 |     3847 | 2024-01-31 | NKT         | W   | 0.079      | 0.143        | 0.001 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     1.13 | expro, kory, phzy, somebody, Summer |
|           10 |     3850 | 2024-01-31 | Lynn Vision | W   | 0.079      | 0.143        | 0.126 (0.001)    | 0.212 (0.002)    | 0 (0.000) |     2.29 | expro, kory, phzy, somebody, Summer |
|            9 |     3853 | 2024-01-31 | ATOX        | L   | 0.078      | -            | -                | -                | -         |    -0.46 | expro, kory, phzy, somebody, Summer |
|            8 |     3934 | 2024-01-25 | Wings Up    | L   | 0.039      | -            | -                | -                | -         |    -0.92 | expro, kory, phzy, somebody, Summer |
|            7 |     3938 | 2024-01-25 | Newhappy    | W   | 0.038      | 0.143        | 0.000 (0.000)    | 0.028 (0.000)    | 0 (0.000) |     0.35 | expro, kory, phzy, somebody, Summer |
|            6 |     3952 | 2024-01-24 | Eruption    | W   | 0.033      | 0.143        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.17 | expro, kory, phzy, somebody, Summer |
|            5 |     4004 | 2024-01-22 | ATOX        | L   | 0.019      | -            | -                | -                | -         |    -0.11 | expro, kory, phzy, somebody, Summer |
|            4 |     4031 | 2024-01-21 | TYLOO       | L   | 0.012      | -            | -                | -                | -         |    -0.12 | expro, kory, phzy, somebody, Summer |
|            3 |     4037 | 2024-01-21 | Newhappy    | W   | 0.011      | 0.143        | 0.000 (0.000)    | 0.028 (0.000)    | 0 (0.000) |     0.10 | expro, kory, phzy, somebody, Summer |
|            2 |     4079 | 2024-01-20 | Wings Up    | W   | 0.005      | 0.143        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.04 | expro, kory, phzy, somebody, Summer |
|            1 |     4088 | 2024-01-19 | SHPL        | W   | 0.004      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.02 | expro, kory, phzy, somebody, Summer |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,706.91)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
