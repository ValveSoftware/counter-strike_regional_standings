### Roster Details<br />
Team Name: Imperial fe<br />
Roster: ANa, Kat, tory, twenty3, zAAz<br />
Global Rank: [48](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [36]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1071.0<br />
<br />
Final Rank Value (1071.0) = Starting Rank Value (1047.2) + Head To Head Adjustments (23.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.531[<sup>1</sup>](#table2)
- Bounty Collected: 0.317[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.367[<sup>2</sup>](#table1)

The average of these factors is 0.313<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1047.2
- 400 + ( ( 0.313 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1047.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |     1407 | 2024-06-02 | Let Her Cook  | W   | 0.807      | 0.524        | 0.061 (0.026)    | 0.147 (0.062)    | 1 (0.807) |     8.43 | ANa, Kat, tory, twenty3, zAAz |
|           24 |     1414 | 2024-06-02 | panelinha     | W   | 0.806      | 0.524        | 0.033 (0.014)    | 0.159 (0.067)    | 1 (0.806) |     6.79 | ANa, Kat, tory, twenty3, zAAz |
|           23 |     1470 | 2024-05-31 | BIG EQUIPA    | W   | 0.794      | 0.524        | 0.018 (0.007)    | 0.157 (0.065)    | 1 (0.794) |     4.79 | ANa, Kat, tory, twenty3, zAAz |
|           22 |     1487 | 2024-05-31 | HSG fe        | W   | 0.792      | 0.524        | 0.032 (0.013)    | 0.071 (0.029)    | 1 (0.792) |     5.98 | ANa, Kat, tory, twenty3, zAAz |
|           21 |     1789 | 2024-05-19 | NAVI Javelins | L   | 0.712      | -            | -                | -                | -         |   -16.58 | ANa, Kat, tory, twenty3, zAAz |
|           20 |     1799 | 2024-05-19 | NIP Impact    | W   | 0.711      | 0.281        | 0.006 (0.001)    | 0.191 (0.038)    | 0 (0.000) |     3.14 | ANa, Kat, tory, twenty3, zAAz |
|           19 |     1816 | 2024-05-18 | Crescent fe   | W   | 0.706      | 0.281        | 0.005 (0.001)    | -                | 0 (0.000) |     1.99 | ANa, Kat, tory, twenty3, zAAz |
|           18 |     2199 | 2024-05-05 | Crescent fe   | W   | 0.618      | -            | -                | -                | 0 (0.000) |     1.78 | ANa, Kat, tory, twenty3, zAAz |
|           17 |     2366 | 2024-04-27 | NIP Impact    | W   | 0.565      | 0.252        | -                | 0.191 (0.027)    | 0 (0.000) |     2.50 | ANa, Kat, tory, twenty3, zAAz |
|           16 |     2369 | 2024-04-27 | Spirit fe     | W   | 0.565      | -            | -                | -                | 0 (0.000) |     1.61 | ANa, Kat, tory, twenty3, zAAz |
|           15 |     2562 | 2024-04-19 | ex-GUILD fe   | W   | 0.513      | -            | -                | -                | 0 (0.000) |     1.75 | ANa, Kat, tory, twenty3, zAAz |
|           14 |     2687 | 2024-04-16 | NAVI Javelins | L   | 0.493      | -            | -                | -                | -         |   -12.04 | ANa, Kat, tory, twenty3, zAAz |
|           13 |     2721 | 2024-04-14 | NIP Impact    | W   | 0.479      | 0.303        | 0.006 (0.001)    | 0.191 (0.028)    | -         |     2.14 | ANa, Kat, tory, twenty3, zAAz |
|           12 |     2739 | 2024-04-13 | NAVI Javelins | W   | 0.472      | 0.303        | 0.027 (0.004)    | 0.194 (0.028)    | -         |     3.23 | ANa, Kat, tory, twenty3, zAAz |
|           11 |     2775 | 2024-04-11 | Astralis W    | W   | 0.459      | -            | -                | -                | -         |     1.16 | ANa, Kat, tory, twenty3, zAAz |
|           10 |     2822 | 2024-04-10 | Astralis W    | W   | 0.452      | -            | -                | -                | -         |     1.15 | ANa, Kat, tory, twenty3, zAAz |
|            9 |     2909 | 2024-04-08 | Crescent fe   | W   | 0.438      | -            | -                | -                | -         |     1.43 | ANa, Kat, tory, twenty3, zAAz |
|            8 |     2939 | 2024-04-07 | NIP Impact    | W   | 0.432      | 0.262        | -                | 0.191 (0.022)    | -         |     1.88 | ANa, Kat, tory, twenty3, zAAz |
|            7 |     2943 | 2024-04-07 | BIG EQUIPA    | W   | 0.431      | 0.262        | 0.018 (0.002)    | 0.157 (0.018)    | -         |     2.49 | ANa, Kat, tory, twenty3, zAAz |
|            6 |     2959 | 2024-04-06 | ENCE Athena   | W   | 0.425      | -            | -                | -                | -         |     1.24 | ANa, Kat, tory, twenty3, zAAz |
|            5 |     3179 | 2024-03-27 | ENCE Athena   | W   | 0.360      | -            | -                | -                | -         |     1.09 | ANa, Kat, tory, twenty3, zAAz |
|            4 |     3416 | 2024-03-14 | BIG EQUIPA    | W   | 0.273      | 0.331        | 0.018 (0.002)    | -                | -         |     1.61 | ANa, Kat, tory, twenty3, zAAz |
|            3 |     3594 | 2024-03-07 | NIP Impact    | W   | 0.226      | -            | -                | -                | -         |     0.93 | ANa, Kat, tory, twenty3, zAAz |
|            2 |     3825 | 2024-02-26 | 500           | L   | 0.158      | -            | -                | -                | -         |    -4.31 | ANa, Kat, tory, twenty3, zAAz |
|            1 |     4246 | 2024-02-05 | Sampi         | L   | 0.019      | -            | -                | -                | -         |    -0.41 | ANa, Kat, tory, twenty3, zAAz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($42,969.62)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.807 | $50,000.00     | $40,354.02      |
| 2024-05-19 |      0.712 | $800.00        | $569.93         |
| 2024-05-05 |      0.618 | $750.00        | $463.85         |
| 2024-04-27 |      0.565 | $535.00        | $302.43         |
| 2024-04-16 |      0.493 | $1,500.00      | $739.47         |
| 2024-04-07 |      0.432 | $1,250.00      | $539.92         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
