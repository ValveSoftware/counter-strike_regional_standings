### Roster Details<br />
Team Name: Astralis W<br />
Roster: anja, aurora, Ismo, josefine, marie<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [179](../standings_global.md)<br />
Regional Rank: [110]( ../standings_europe.md)<br />
Final Rank Value:  603.4<br />
<br />
Final Rank Value (603.4) = Starting Rank Value (631.9) + Head To Head Adjustments (-28.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.275[<sup>1</sup>](#table2)
- Bounty Collected: 0.180[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.114<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 631.9
- 400 + ( ( 0.114 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 631.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     1727 | 2024-04-19 | ENCE Athena     | L   | 0.803      | -            | -                | -                | -         |   -11.27 | anja, aurora, Ismo, josefine, marie |
|           11 |     1898 | 2024-04-14 | NAVI Javelins   | L   | 0.768      | -            | -                | -                | -         |    -4.66 | anja, aurora, Ismo, josefine, marie |
|           10 |     1907 | 2024-04-13 | NIP Impact      | L   | 0.762      | -            | -                | -                | -         |    -7.14 | anja, aurora, Ismo, josefine, marie |
|            9 |     1926 | 2024-04-12 | Permitta W      | W   | 0.755      | 0.303        | 0.000 (0.000)    | 0.026 (0.006)    | 0 (0.000) |     8.38 | anja, aurora, Ismo, josefine, marie |
|            8 |     1947 | 2024-04-11 | Imperial fe     | L   | 0.749      | -            | -                | -                | -         |    -1.44 | anja, aurora, Ismo, josefine, marie |
|            7 |     1994 | 2024-04-10 | Imperial fe     | L   | 0.742      | -            | -                | -                | -         |    -1.45 | anja, aurora, Ismo, josefine, marie |
|            6 |     2074 | 2024-04-08 | Permitta W      | W   | 0.729      | 0.303        | 0.000 (0.000)    | 0.026 (0.006)    | 0 (0.000) |     8.01 | anja, aurora, Ismo, josefine, marie |
|            5 |     2220 | 2024-04-03 | NIP Impact      | L   | 0.696      | -            | -                | -                | -         |    -7.54 | anja, aurora, Ismo, josefine, marie |
|            4 |     2440 | 2024-03-21 | ex-GUILD fe     | L   | 0.610      | -            | -                | -                | -         |    -8.27 | anja, aurora, Ismo, josefine, marie |
|            3 |     2797 | 2024-03-06 | BIG EQUIPA      | L   | 0.510      | -            | -                | -                | -         |    -4.12 | anja, aurora, Ismo, josefine, marie |
|            2 |     3176 | 2024-02-18 | ex-FORZE Ladies | W   | 0.397      | 0.143        | 0.005 (0.000)    | 0.053 (0.003)    | 0 (0.000) |     6.71 | anja, aurora, Ismo, josefine, marie |
|            1 |     3180 | 2024-02-18 | Spirit fe       | L   | 0.396      | -            | -                | -                | -         |    -5.76 | anja, aurora, Ismo, josefine, marie |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($693.73)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
