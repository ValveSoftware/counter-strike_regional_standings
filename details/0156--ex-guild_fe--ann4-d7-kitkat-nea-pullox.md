### Roster Details<br />
Team Name: ex-GUILD fe<br />
Roster: Ann4, D7, KiTKaT, Nea, pullox<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [156](../standings_global.md)<br />
Regional Rank: [100]( ../standings_europe.md)<br />
Final Rank Value:  694.3<br />
<br />
Final Rank Value (694.3) = Starting Rank Value (685.7) + Head To Head Adjustments (8.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.299[<sup>1</sup>](#table2)
- Bounty Collected: 0.249[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.141<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 685.7
- 400 + ( ( 0.141 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 685.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      990 | 2024-05-18 | NIP Impact        | L   | 0.995      | -            | -                | -                | -         |   -12.63 | Ann4, D7, KiTKaT, Nea, pullox              |
|           11 |     1661 | 2024-04-21 | Fearless Cheetahs | W   | 0.816      | 0.331        | 0.005 (0.001)    | 0.104 (0.028)    | 0 (0.000) |    14.51 | kr4sy, Ksu, t4tty, Victoria, vilga         |
|           10 |     1691 | 2024-04-20 | Let Her Cook      | L   | 0.809      | -            | -                | -                | -         |    -5.32 | ASTRA, Joanana, ManeschijnX, meli, RacheLL |
|            9 |     1734 | 2024-04-19 | Imperial fe       | L   | 0.803      | -            | -                | -                | -         |    -2.44 | Ann4, D7, KiTKaT, Nea, pullox              |
|            8 |     1991 | 2024-04-10 | NIP Impact        | W   | 0.743      | 0.331        | 0.008 (0.002)    | 0.207 (0.051)    | 0 (0.000) |    14.12 | aiM, jenkon, Nayomy, Qiyarah, ramziiN      |
|            7 |     2129 | 2024-04-06 | NIP Impact        | L   | 0.714      | -            | -                | -                | -         |    -9.71 | Ann4, D7, KiTKaT, Nea, pullox              |
|            6 |     2314 | 2024-03-28 | BIG EQUIPA        | W   | 0.656      | 0.331        | 0.025 (0.005)    | 0.254 (0.055)    | 0 (0.000) |    13.96 | Ann4, D7, KiTKaT, Nea, pullox              |
|            5 |     2440 | 2024-03-21 | Astralis W        | W   | 0.610      | 0.331        | 0.002 (0.000)    | 0.041 (0.008)    | 0 (0.000) |     8.27 | Ann4, D7, KiTKaT, Nea, pullox              |
|            4 |     2621 | 2024-03-13 | ENCE Athena       | L   | 0.556      | -            | -                | -                | -         |    -9.07 | Aida, Emmsan, miLo, Waldee, xia            |
|            3 |     3051 | 2024-02-24 | BIG EQUIPA        | L   | 0.435      | -            | -                | -                | -         |    -4.59 | Ann4, D7, KiTKaT, Nea, pullox              |
|            2 |     3289 | 2024-02-14 | Spirit fe         | W   | 0.370      | 0.143        | 0.005 (0.000)    | 0.054 (0.003)    | 0 (0.000) |     5.48 | Ann4, D7, KiTKaT, Nea, pullox              |
|            1 |     3727 | 2024-01-21 | Nemesis fe        | L   | 0.209      | -            | -                | -                | -         |    -3.98 | Ann4, D7, KiTKaT, kr4sy, pullox            |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,358.12)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-21 |      0.816 | $1,600.00      | $1,305.85       |
| 2024-01-21 |      0.209 | $250.00        | $52.27          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
