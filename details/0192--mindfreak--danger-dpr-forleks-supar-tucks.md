### Roster Details<br />
Team Name: Mindfreak<br />
Roster: dangeR, dpr, Forleks, supar, tucks<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [192](../standings_global.md)<br />
Regional Rank: [23]( ../standings_asia.md)<br />
Final Rank Value:  548.9<br />
<br />
Final Rank Value (548.9) = Starting Rank Value (508.7) + Head To Head Adjustments (40.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.054<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 508.7
- 400 + ( ( 0.054 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 508.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     3644 | 2024-01-25 | Rooster       | L   | 0.233      | -            | -                | -                | -         |    -1.36 | dangeR, dpr, Forleks, supar, tucks |
|           17 |     3661 | 2024-01-24 | DXA           | W   | 0.227      | 0.143        | 0.004 (0.000)    | 0.179 (0.006)    | 0 (0.000) |     5.05 | dangeR, dpr, Forleks, supar, tucks |
|           16 |     3681 | 2024-01-23 | FlyQuest      | L   | 0.220      | -            | -                | -                | -         |    -0.07 | dangeR, dpr, Forleks, supar, tucks |
|           15 |     3683 | 2024-01-23 | Rooster       | W   | 0.220      | 0.143        | 0.018 (0.001)    | 0.258 (0.008)    | 0 (0.000) |     5.72 | dangeR, dpr, Forleks, supar, tucks |
|           14 |     3710 | 2024-01-22 | FlyQuest      | L   | 0.214      | -            | -                | -                | -         |    -0.06 | dangeR, dpr, Forleks, supar, tucks |
|           13 |     3711 | 2024-01-22 | Rooster       | W   | 0.213      | 0.143        | 0.018 (0.001)    | 0.258 (0.008)    | 0 (0.000) |     5.59 | dangeR, dpr, Forleks, supar, tucks |
|           12 |     3746 | 2024-01-20 | FlyQuest      | L   | 0.205      | -            | -                | -                | -         |    -0.06 | dangeR, dpr, Forleks, supar, tucks |
|           11 |     3785 | 2024-01-20 | DXA           | W   | 0.200      | 0.143        | 0.000 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     2.06 | dangeR, dpr, Forleks, supar, tucks |
|           10 |     3844 | 2024-01-19 | Rooster       | L   | 0.193      | -            | -                | -                | -         |    -1.00 | dangeR, dpr, Forleks, supar, tucks |
|            9 |     3848 | 2024-01-18 | Vantage       | W   | 0.193      | 0.143        | 0.003 (0.000)    | 0.166 (0.005)    | 0 (0.000) |     4.19 | dangeR, dpr, Forleks, supar, tucks |
|            8 |     3902 | 2024-01-18 | Arcade        | W   | 0.187      | 0.143        | 0.005 (0.000)    | 0.157 (0.004)    | 0 (0.000) |     4.17 | dangeR, dpr, Forleks, supar, tucks |
|            7 |     3905 | 2024-01-17 | Vantage       | W   | 0.186      | 0.143        | 0.003 (0.000)    | 0.166 (0.004)    | 0 (0.000) |     4.13 | dangeR, dpr, Forleks, supar, tucks |
|            6 |     3952 | 2024-01-17 | PatatiPatata  | W   | 0.180      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.92 | dangeR, dpr, Forleks, supar, tucks |
|            5 |     4003 | 2024-01-16 | FlyQuest      | L   | 0.173      | -            | -                | -                | -         |    -0.04 | dangeR, dpr, Forleks, supar, tucks |
|            4 |     4032 | 2024-01-15 | KZG           | W   | 0.167      | 0.143        | 0.009 (0.000)    | 0.142 (0.003)    | 0 (0.000) |     4.02 | dangeR, dpr, Forleks, supar, tucks |
|            3 |     4092 | 2024-01-13 | RKON          | W   | 0.153      | 0.143        | 0.000 (0.000)    | 0.074 (0.002)    | 0 (0.000) |     2.48 | dangeR, dpr, Forleks, supar, tucks |
|            2 |     4094 | 2024-01-13 | iM Apartments | W   | 0.153      | -            | -                | -                | -         |     1.69 | dangeR, dpr, Forleks, supar, tucks |
|            1 |     4096 | 2024-01-12 | 500x          | W   | 0.153      | -            | -                | -                | -         |     1.69 | dangeR, dpr, Forleks, supar, tucks |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
