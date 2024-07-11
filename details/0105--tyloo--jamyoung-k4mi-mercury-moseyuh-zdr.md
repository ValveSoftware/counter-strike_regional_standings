### Roster Details<br />
Team Name: TYLOO<br />
Roster: JamYoung, k4Mi, Mercury, Moseyuh, zdr<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [105](../standings_global.md)<br />
Regional Rank: [7]( ../standings_asia.md)<br />
Final Rank Value:  857.6<br />
<br />
Final Rank Value (857.6) = Starting Rank Value (834.2) + Head To Head Adjustments (23.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.435[<sup>1</sup>](#table2)
- Bounty Collected: 0.294[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.080[<sup>2</sup>](#table1)

The average of these factors is 0.206<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 834.2
- 400 + ( ( 0.206 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 834.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      460 | 2024-06-08 | Lynn Vision     | L   | 0.979      | -            | -                | -                | -         |    -5.73 | JamYoung, k4Mi, Mercury, Moseyuh, zdr   |
|           17 |      514 | 2024-06-07 | GR              | W   | 0.972      | 0.416        | 0.012 (0.005)    | 0.078 (0.031)    | 0 (0.000) |     8.85 | JamYoung, k4Mi, Mercury, Moseyuh, zdr   |
|           16 |      583 | 2024-06-06 | The QUBE        | W   | 0.965      | 0.416        | 0.008 (0.003)    | 0.078 (0.031)    | 0 (0.000) |     9.18 | JamYoung, k4Mi, Mercury, Moseyuh, zdr   |
|           15 |      636 | 2024-06-05 | Lynn Vision     | L   | 0.959      | -            | -                | -                | -         |    -4.91 | JamYoung, k4Mi, Mercury, Moseyuh, zdr   |
|           14 |      682 | 2024-06-04 | LYG             | W   | 0.952      | 0.416        | 0.005 (0.002)    | 0.054 (0.021)    | 0 (0.000) |    10.48 | JamYoung, k4Mi, Mercury, Moseyuh, zdr   |
|           13 |     1669 | 2024-04-27 | M80             | L   | 0.700      | -            | -                | -                | -         |    -2.04 | advent, JamYoung, kaze, Mercury, zdr    |
|           12 |     1692 | 2024-04-26 | Sharks          | W   | 0.694      | 0.889        | 0.030 (0.018)    | 0.047 (0.029)    | 1 (0.694) |     9.31 | advent, JamYoung, kaze, Mercury, zdr    |
|           11 |     1729 | 2024-04-25 | Falcons         | L   | 0.686      | -            | -                | -                | -         |    -0.33 | advent, JamYoung, kaze, Mercury, zdr    |
|           10 |     1751 | 2024-04-24 | G2              | L   | 0.679      | -            | -                | -                | -         |    -0.05 | advent, JamYoung, kaze, Mercury, zdr    |
|            9 |     1884 | 2024-04-19 | Rare Atom       | L   | 0.645      | -            | -                | -                | -         |   -14.56 | advent, JamYoung, kaze, Mercury, zdr    |
|            8 |     1924 | 2024-04-18 | The MongolZ     | L   | 0.639      | -            | -                | -                | -         |    -0.05 | advent, JamYoung, kaze, Mercury, zdr    |
|            7 |     1937 | 2024-04-18 | Lynn Vision     | W   | 0.638      | 0.143        | 0.127 (0.012)    | 0.221 (0.020)    | 0 (0.000) |    17.18 | advent, JamYoung, kaze, Mercury, zdr    |
|            6 |     1968 | 2024-04-17 | Sheer Conquer   | W   | 0.632      | 0.143        | 0.000 (0.000)    | 0.026 (0.002)    | 0 (0.000) |     2.80 | advent, JamYoung, kaze, Mercury, zdr    |
|            5 |     1974 | 2024-04-17 | The Huns        | W   | 0.631      | 0.143        | 0.000 (0.000)    | 0.024 (0.002)    | 0 (0.000) |     2.81 | advent, JamYoung, kaze, Mercury, zdr    |
|            4 |     2222 | 2024-04-08 | Lynn Vision     | L   | 0.572      | -            | -                | -                | -         |    -2.46 | advent, JamYoung, kaze, Mercury, zdr    |
|            3 |     2232 | 2024-04-08 | MOUZ            | L   | 0.570      | -            | -                | -                | -         |    -0.03 | advent, JamYoung, kaze, Mercury, zdr    |
|            2 |     2766 | 2024-03-13 | LYG             | L   | 0.399      | -            | -                | -                | -         |    -8.00 | advent, JamYoung, lyrics3, Mercury, zdr |
|            1 |     2772 | 2024-03-13 | padaem Holodnie | W   | 0.398      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.00 | advent, JamYoung, lyrics3, Mercury, zdr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,975.12)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.986 | $5,000.00      | $4,929.20       |
| 2024-05-12 |      0.800 | $7,000.00      | $5,598.99       |
| 2024-04-14 |      0.612 | $4,000.00      | $2,446.93       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
