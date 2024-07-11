### Roster Details<br />
Team Name: Fearless Cheetahs<br />
Roster: kr4sy, Ksu, t4tty, Victoria, vilga<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [143](../standings_global.md)<br />
Regional Rank: [91]( ../standings_europe.md)<br />
Final Rank Value:  735.5<br />
<br />
Final Rank Value (735.5) = Starting Rank Value (713.8) + Head To Head Adjustments (21.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.302[<sup>1</sup>](#table2)
- Bounty Collected: 0.284[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.149<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 713.8
- 400 + ( ( 0.149 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 713.8


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
|           10 |     1795 | 2024-04-21 | ex-GUILD fe   | L   | 0.660      | -            | -                | -                | -         |   -11.63 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            9 |     1814 | 2024-04-20 | BIG EQUIPA    | L   | 0.654      | -            | -                | -                | -         |    -7.91 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            8 |     1859 | 2024-04-19 | 1WIN Gang     | W   | 0.647      | 0.331        | 0.002 (0.001)    | 0.024 (0.005)    | 0 (0.000) |     8.26 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            7 |     2078 | 2024-04-11 | Crescent fe   | W   | 0.594      | 0.331        | 0.007 (0.001)    | 0.107 (0.021)    | 0 (0.000) |     7.57 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            6 |     2250 | 2024-04-07 | NIP Impact    | L   | 0.565      | -            | -                | -                | -         |    -8.74 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            5 |     2267 | 2024-04-06 | Let Her Cook  | W   | 0.558      | 0.262        | 0.091 (0.013)    | 0.195 (0.028)    | 0 (0.000) |    14.37 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            4 |     2487 | 2024-03-27 | Spirit fe     | W   | 0.494      | 0.331        | 0.004 (0.001)    | 0.043 (0.007)    | 0 (0.000) |     6.62 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            3 |     2569 | 2024-03-21 | Let Her Cook  | W   | 0.454      | 0.331        | 0.091 (0.014)    | 0.195 (0.029)    | 0 (0.000) |    12.00 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            2 |     2927 | 2024-03-06 | NAVI Javelins | L   | 0.354      | -            | -                | -                | -         |    -3.10 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            1 |     3146 | 2024-02-25 | 1WIN Gang     | W   | 0.287      | 0.250        | 0.002 (0.000)    | 0.024 (0.002)    | 0 (0.000) |     4.19 | kr4sy, Ksu, t4tty, Victoria, vilga |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,272.08)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-21 |      0.660 | $1,600.00      | $1,056.77       |
| 2024-02-25 |      0.287 | $750.00        | $215.30         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
