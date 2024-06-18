### Roster Details<br />
Team Name: Spirit fe<br />
Roster: AverOna, Jammie, Rony4ka, tenweri, uulis<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [177](../standings_global.md)<br />
Regional Rank: [109]( ../standings_europe.md)<br />
Final Rank Value:  609.4<br />
<br />
Final Rank Value (609.4) = Starting Rank Value (662.1) + Head To Head Adjustments (-52.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.300[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 662.1
- 400 + ( ( 0.129 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 662.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      323 | 2024-06-08 | NOFEAR5           | L   | 1.000      | -            | -                | -                | -         |   -13.14 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|           14 |      997 | 2024-05-18 | NAVI Javelins     | L   | 0.995      | -            | -                | -                | -         |    -5.24 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|           13 |     1541 | 2024-04-27 | Imperial fe       | L   | 0.855      | -            | -                | -                | -         |    -1.79 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|           12 |     1730 | 2024-04-19 | Let Her Cook      | L   | 0.803      | -            | -                | -                | -         |    -4.03 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|           11 |     1896 | 2024-04-14 | ex-FORZE Ladies   | L   | 0.769      | -            | -                | -                | -         |   -11.45 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|           10 |     1952 | 2024-04-11 | NAVI Javelins     | L   | 0.749      | -            | -                | -                | -         |    -5.20 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            9 |     2049 | 2024-04-09 | Let Her Cook      | L   | 0.736      | -            | -                | -                | -         |    -3.48 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            8 |     2130 | 2024-04-06 | BIG EQUIPA        | L   | 0.714      | -            | -                | -                | -         |    -6.56 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            7 |     2175 | 2024-04-04 | NAVI Javelins     | L   | 0.703      | -            | -                | -                | -         |    -5.00 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            6 |     2354 | 2024-03-27 | Fearless Cheetahs | L   | 0.650      | -            | -                | -                | -         |    -8.56 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            5 |     2468 | 2024-03-20 | Crescent fe       | W   | 0.603      | 0.331        | 0.007 (0.001)    | 0.109 (0.022)    | 0 (0.000) |     9.78 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            4 |     2766 | 2024-03-07 | 1WIN Gang         | W   | 0.516      | 0.331        | 0.003 (0.000)    | 0.026 (0.005)    | 0 (0.000) |     8.50 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            3 |     3049 | 2024-02-24 | ENCE Athena       | L   | 0.435      | -            | -                | -                | -         |    -6.81 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            2 |     3180 | 2024-02-18 | Astralis W        | W   | 0.396      | 0.143        | 0.002 (0.000)    | 0.041 (0.002)    | 0 (0.000) |     5.76 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            1 |     3289 | 2024-02-14 | ex-GUILD fe       | L   | 0.370      | -            | -                | -                | -         |    -5.48 | AverOna, Jammie, Rony4ka, tenweri, uulis |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,403.83)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-08 |      1.000 | $100.00        | $100.00         |
| 2024-04-27 |      0.855 | $107.00        | $91.49          |
| 2024-04-21 |      0.816 | $1,250.00      | $1,020.20       |
| 2024-04-14 |      0.769 | $250.00        | $192.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
