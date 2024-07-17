### Roster Details<br />
Team Name: Astralis W<br />
Roster: anja, aurora, Ismo, josefine, marie<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [180](../standings_global.md)<br />
Regional Rank: [114]( ../standings_europe.md)<br />
Final Rank Value:  617.5<br />
<br />
Final Rank Value (617.5) = Starting Rank Value (638.3) + Head To Head Adjustments (-20.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.273[<sup>1</sup>](#table2)
- Bounty Collected: 0.170[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.111<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 638.3
- 400 + ( ( 0.111 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 638.3


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
|           12 |     2025 | 2024-04-19 | ENCE Athena     | L   | 0.608      | -            | -                | -                | -         |    -8.61 | anja, aurora, Ismo, josefine, marie |
|           11 |     2196 | 2024-04-14 | NAVI Javelins   | L   | 0.573      | -            | -                | -                | -         |    -3.50 | anja, aurora, Ismo, josefine, marie |
|           10 |     2205 | 2024-04-13 | NIP Impact      | L   | 0.567      | -            | -                | -                | -         |    -5.60 | anja, aurora, Ismo, josefine, marie |
|            9 |     2224 | 2024-04-12 | Permitta W      | W   | 0.560      | 0.303        | 0.000 (0.000)    | 0.023 (0.004)    | 0 (0.000) |     6.05 | anja, aurora, Ismo, josefine, marie |
|            8 |     2245 | 2024-04-11 | Imperial fe     | L   | 0.554      | -            | -                | -                | -         |    -0.90 | anja, aurora, Ismo, josefine, marie |
|            7 |     2292 | 2024-04-10 | Imperial fe     | L   | 0.547      | -            | -                | -                | -         |    -0.90 | anja, aurora, Ismo, josefine, marie |
|            6 |     2372 | 2024-04-08 | Permitta W      | W   | 0.534      | 0.303        | 0.000 (0.000)    | 0.023 (0.004)    | 0 (0.000) |     5.72 | anja, aurora, Ismo, josefine, marie |
|            5 |     2518 | 2024-04-03 | NIP Impact      | L   | 0.501      | -            | -                | -                | -         |    -5.52 | anja, aurora, Ismo, josefine, marie |
|            4 |     2737 | 2024-03-21 | ex-GUILD fe     | L   | 0.414      | -            | -                | -                | -         |    -5.58 | anja, aurora, Ismo, josefine, marie |
|            3 |     3094 | 2024-03-06 | BIG EQUIPA      | L   | 0.314      | -            | -                | -                | -         |    -2.53 | anja, aurora, Ismo, josefine, marie |
|            2 |     3473 | 2024-02-18 | ex-FORZE Ladies | W   | 0.201      | 0.143        | 0.005 (0.000)    | 0.045 (0.001)    | 0 (0.000) |     3.45 | anja, aurora, Ismo, josefine, marie |
|            1 |     3477 | 2024-02-18 | Spirit fe       | L   | 0.201      | -            | -                | -                | -         |    -2.89 | anja, aurora, Ismo, josefine, marie |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($527.74)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
