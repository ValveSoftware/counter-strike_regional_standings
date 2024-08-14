### Roster Details<br />
Team Name: TYLOO<br />
Roster: advent, JamYoung, kaze, Mercury, zdr<br />
Global Rank: [140](../standings_global.md)<br />
<br />
Region: [Asia]( ../standings_asia.md)<br />
Regional Rank: [12]( ../standings_asia.md)<br />
<br />
Final Rank Value:  746.0<br />
<br />
Final Rank Value (746.0) = Starting Rank Value (735.0) + Head To Head Adjustments (11.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.362[<sup>1</sup>](#table2)
- Bounty Collected: 0.255[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.059[<sup>2</sup>](#table1)

The average of these factors is 0.170<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 735.0
- 400 + ( ( 0.170 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 735.0


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
|           16 |     2844 | 2024-04-27 | M80             | L   | 0.472      | -            | -                | -                | -         |    -1.14 | advent, JamYoung, kaze, Mercury, zdr    |
|           15 |     2867 | 2024-04-26 | Sharks          | W   | 0.466      | 0.889        | 0.018 (0.008)    | 0.027 (0.011)    | 1 (0.466) |     7.46 | advent, JamYoung, kaze, Mercury, zdr    |
|           14 |     2904 | 2024-04-25 | Falcons         | L   | 0.458      | -            | -                | -                | -         |    -0.19 | advent, JamYoung, kaze, Mercury, zdr    |
|           13 |     2926 | 2024-04-24 | G2              | L   | 0.451      | -            | -                | -                | -         |    -0.01 | advent, JamYoung, kaze, Mercury, zdr    |
|           12 |     3059 | 2024-04-19 | Rare Atom       | L   | 0.418      | -            | -                | -                | -         |    -4.66 | advent, JamYoung, kaze, Mercury, zdr    |
|           11 |     3099 | 2024-04-18 | The MongolZ     | L   | 0.412      | -            | -                | -                | -         |    -0.02 | advent, JamYoung, kaze, Mercury, zdr    |
|           10 |     3112 | 2024-04-18 | Lynn Vision     | W   | 0.411      | 0.143        | 0.079 (0.005)    | 0.161 (0.009)    | 0 (0.000) |    10.52 | advent, JamYoung, kaze, Mercury, zdr    |
|            9 |     3143 | 2024-04-17 | Sheer Conquer   | W   | 0.404      | 0.143        | 0.000 (0.000)    | 0.016 (0.001)    | 0 (0.000) |     2.61 | advent, JamYoung, kaze, Mercury, zdr    |
|            8 |     3149 | 2024-04-17 | The Huns        | W   | 0.404      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.72 | advent, JamYoung, kaze, Mercury, zdr    |
|            7 |     3397 | 2024-04-08 | Lynn Vision     | L   | 0.345      | -            | -                | -                | -         |    -1.98 | advent, JamYoung, kaze, Mercury, zdr    |
|            6 |     3407 | 2024-04-08 | MOUZ            | L   | 0.343      | -            | -                | -                | -         |    -0.03 | advent, JamYoung, kaze, Mercury, zdr    |
|            5 |     3941 | 2024-03-13 | LYG             | L   | 0.171      | -            | -                | -                | -         |    -3.03 | advent, JamYoung, lyrics3, Mercury, zdr |
|            4 |     3947 | 2024-03-13 | padaem Holodnie | W   | 0.171      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.72 | advent, JamYoung, lyrics3, Mercury, zdr |
|            3 |     4296 | 2024-02-27 | ATOX            | L   | 0.070      | -            | -                | -                | -         |    -0.83 | advent, aumaN, JamYoung, kaze, Mercury  |
|            2 |     4308 | 2024-02-26 | Lynn Vision     | L   | 0.063      | -            | -                | -                | -         |    -0.38 | advent, aumaN, JamYoung, kaze, Mercury  |
|            1 |     4310 | 2024-02-25 | JiJieHao        | W   | 0.063      | 0.143        | 0.000 (0.000)    | 0.003 (0.000)    | 1 (0.063) |     0.27 | advent, aumaN, JamYoung, kaze, Mercury  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,544.89)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      0.572 | $7,000.00      | $4,007.42       |
| 2024-04-14 |      0.384 | $4,000.00      | $1,537.46       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
