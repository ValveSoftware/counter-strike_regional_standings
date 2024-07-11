### Roster Details<br />
Team Name: Rare Atom<br />
Roster: expro, kory, phzy, somebody, Summer<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [160](../standings_global.md)<br />
Regional Rank: [14]( ../standings_asia.md)<br />
Final Rank Value:  689.9<br />
<br />
Final Rank Value (689.9) = Starting Rank Value (683.0) + Head To Head Adjustments (6.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.319[<sup>1</sup>](#table2)
- Bounty Collected: 0.217[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.134<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 683.0
- 400 + ( ( 0.134 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 683.0


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
|           15 |     2938 | 2024-03-06 | Cloud9      | L   | 0.353      | -            | -                | -                | -         |    -0.46 | expro, kory, phzy, somebody, Summer |
|           14 |     3634 | 2024-02-02 | GR          | W   | 0.132      | 0.143        | 0.012 (0.000)    | 0.078 (0.001)    | 0 (0.000) |     2.16 | expro, kory, phzy, somebody, Summer |
|           13 |     3639 | 2024-02-02 | TYLOO       | W   | 0.132      | 0.143        | 0.002 (0.000)    | 0.044 (0.001)    | 0 (0.000) |     2.23 | expro, kory, phzy, somebody, Summer |
|           12 |     3683 | 2024-01-31 | NKT         | W   | 0.119      | 0.143        | 0.002 (0.000)    | 0.010 (0.000)    | 0 (0.000) |     1.77 | expro, kory, phzy, somebody, Summer |
|           11 |     3686 | 2024-01-31 | Lynn Vision | W   | 0.118      | 0.143        | 0.127 (0.002)    | 0.221 (0.004)    | 0 (0.000) |     3.48 | expro, kory, phzy, somebody, Summer |
|           10 |     3689 | 2024-01-31 | ATOX        | L   | 0.118      | -            | -                | -                | -         |    -0.67 | expro, kory, phzy, somebody, Summer |
|            9 |     3770 | 2024-01-25 | Wings Up    | L   | 0.079      | -            | -                | -                | -         |    -1.83 | expro, kory, phzy, somebody, Summer |
|            8 |     3774 | 2024-01-25 | Newhappy    | W   | 0.078      | 0.143        | 0.000 (0.000)    | 0.038 (0.000)    | 0 (0.000) |     0.71 | expro, kory, phzy, somebody, Summer |
|            7 |     3788 | 2024-01-24 | Eruption    | W   | 0.072      | 0.143        | 0.000 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     0.39 | expro, kory, phzy, somebody, Summer |
|            6 |     3840 | 2024-01-22 | ATOX        | L   | 0.059      | -            | -                | -                | -         |    -0.34 | expro, kory, phzy, somebody, Summer |
|            5 |     3867 | 2024-01-21 | TYLOO       | L   | 0.052      | -            | -                | -                | -         |    -0.77 | expro, kory, phzy, somebody, Summer |
|            4 |     3873 | 2024-01-21 | Newhappy    | W   | 0.051      | 0.143        | 0.000 (0.000)    | 0.038 (0.000)    | 0 (0.000) |     0.47 | expro, kory, phzy, somebody, Summer |
|            3 |     3915 | 2024-01-20 | Wings Up    | W   | 0.045      | 0.143        | 0.000 (0.000)    | 0.011 (0.000)    | 0 (0.000) |     0.37 | expro, kory, phzy, somebody, Summer |
|            2 |     3924 | 2024-01-19 | SHPL        | W   | 0.043      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.23 | expro, kory, phzy, somebody, Summer |
|            1 |     3983 | 2024-01-18 | Newhappy    | L   | 0.037      | -            | -                | -                | -         |    -0.82 | expro, kory, phzy, somebody, Summer |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,904.96)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
