### Roster Details<br />
Team Name: Fearless Cheetahs<br />
Roster: kr4sy, Ksu, t4tty, Victoria, vilga<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [142](../standings_global.md)<br />
Regional Rank: [91]( ../standings_europe.md)<br />
Final Rank Value:  736.1<br />
<br />
Final Rank Value (736.1) = Starting Rank Value (709.6) + Head To Head Adjustments (26.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.290[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 709.6
- 400 + ( ( 0.152 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 709.6


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
|           10 |     1661 | 2024-04-21 | ex-GUILD fe   | L   | 0.816      | -            | -                | -                | -         |   -14.51 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            9 |     1680 | 2024-04-20 | BIG EQUIPA    | L   | 0.810      | -            | -                | -                | -         |   -10.11 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            8 |     1725 | 2024-04-19 | 1WIN Gang     | W   | 0.803      | 0.331        | 0.003 (0.001)    | 0.026 (0.007)    | 0 (0.000) |     9.67 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            7 |     1944 | 2024-04-11 | Crescent fe   | W   | 0.750      | 0.331        | 0.007 (0.002)    | 0.109 (0.027)    | 0 (0.000) |     8.99 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            6 |     2116 | 2024-04-07 | NIP Impact    | L   | 0.721      | -            | -                | -                | -         |   -11.27 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            5 |     2133 | 2024-04-06 | Let Her Cook  | W   | 0.714      | 0.262        | 0.083 (0.016)    | 0.199 (0.037)    | 0 (0.000) |    17.63 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            4 |     2354 | 2024-03-27 | Spirit fe     | W   | 0.650      | 0.331        | 0.005 (0.001)    | 0.054 (0.012)    | 0 (0.000) |     8.56 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            3 |     2436 | 2024-03-21 | Let Her Cook  | W   | 0.610      | 0.331        | 0.083 (0.017)    | 0.199 (0.040)    | 0 (0.000) |    15.65 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            2 |     2794 | 2024-03-06 | NAVI Javelins | L   | 0.510      | -            | -                | -                | -         |    -4.50 | kr4sy, Ksu, t4tty, Victoria, vilga |
|            1 |     3013 | 2024-02-25 | 1WIN Gang     | W   | 0.443      | 0.250        | 0.003 (0.000)    | 0.026 (0.003)    | 0 (0.000) |     6.39 | kr4sy, Ksu, t4tty, Victoria, vilga |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,637.91)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-21 |      0.816 | $1,600.00      | $1,305.85       |
| 2024-02-25 |      0.443 | $750.00        | $332.06         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
