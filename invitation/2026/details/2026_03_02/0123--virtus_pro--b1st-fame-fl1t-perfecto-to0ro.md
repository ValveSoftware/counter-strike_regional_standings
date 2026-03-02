### Roster Details<br />
Team Name: Virtus.pro<br />
Roster: b1st, fame, FL1T, Perfecto, tO0RO<br />
Global Rank: [123](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [91]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  882.5<br />
<br />
Final Rank Value (882.5) = Starting Rank Value (899.1) + Head To Head Adjustments (-16.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.488[<sup>1</sup>](#table2)
- Bounty Collected: 0.403[<sup>2</sup>](#table1)
- Opponent Network: 0.049[<sup>2</sup>](#table1)
- LAN Wins: 0.114[<sup>2</sup>](#table1)

The average of these factors is 0.264<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 899.1
- 400 + ( ( 0.264 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 899.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     1157 | 2026-01-31 | WW              | L   | 1.000      | -            | -                | -                | -         |   -12.42 | b1st, fame, FL1T, Perfecto, tO0RO |
|           16 |     1182 | 2026-01-31 | RUSTEC          | L   | 0.998      | -            | -                | -                | -         |   -25.35 | b1st, fame, FL1T, Perfecto, tO0RO |
|           15 |     1275 | 2026-01-27 | Nemiga          | L   | 0.973      | -            | -                | -                | -         |    -4.85 | b1st, fame, FL1T, Perfecto, tO0RO |
|           14 |     1591 | 2026-01-17 | Nuclear TigeRES | L   | 0.907      | -            | -                | -                | -         |    -3.91 | b1st, fame, FL1T, Perfecto, tO0RO |
|           13 |     1710 | 2026-01-14 | Vitality        | L   | 0.888      | -            | -                | -                | -         |    -0.08 | b1st, fame, FL1T, Perfecto, tO0RO |
|           12 |     3047 | 2025-11-04 | G2              | L   | 0.417      | -            | -                | -                | -         |    -0.35 | b1st, fame, FL1T, Perfecto, tO0RO |
|           11 |     3073 | 2025-11-03 | FaZe            | W   | 0.411      | 1.000        | 0.591 (0.242)    | 0.358 (0.147)    | 1 (0.411) |    12.61 | b1st, fame, FL1T, Perfecto, tO0RO |
|           10 |     3098 | 2025-11-02 | Vitality        | L   | 0.404      | -            | -                | -                | -         |    -0.03 | b1st, fame, FL1T, Perfecto, tO0RO |
|            9 |     3654 | 2025-10-16 | 3DMAX           | L   | 0.285      | -            | -                | -                | -         |    -0.41 | fame, FL1T, ICY, Perfecto, tO0RO  |
|            8 |     3695 | 2025-10-15 | MIBR            | W   | 0.278      | 1.000        | 0.153 (0.043)    | 0.666 (0.185)    | 1 (0.278) |     8.34 | fame, FL1T, ICY, Perfecto, tO0RO  |
|            7 |     3724 | 2025-10-14 | The Huns        | W   | 0.272      | 1.000        | 0.022 (0.006)    | 0.425 (0.115)    | 1 (0.272) |     6.68 | fame, FL1T, ICY, Perfecto, tO0RO  |
|            6 |     3733 | 2025-10-13 | Legacy          | L   | 0.270      | -            | -                | -                | -         |    -0.60 | fame, FL1T, ICY, Perfecto, tO0RO  |
|            5 |     4738 | 2025-09-17 | paiN            | L   | 0.094      | -            | -                | -                | -         |    -0.33 | fame, FL1T, ICY, Perfecto, tO0RO  |
|            4 |     4772 | 2025-09-16 | 3DMAX           | W   | 0.085      | 1.000        | 0.401 (0.034)    | 0.298 (0.025)    | 1 (0.085) |     2.58 | fame, FL1T, ICY, Perfecto, tO0RO  |
|            3 |     4803 | 2025-09-15 | Lynn Vision     | W   | 0.078      | 1.000        | 0.088 (0.007)    | 0.268 (0.021)    | 1 (0.078) |     1.57 | fame, FL1T, ICY, Perfecto, tO0RO  |
|            2 |     4841 | 2025-09-14 | Astralis        | L   | 0.072      | -            | -                | -                | -         |    -0.04 | fame, FL1T, ICY, Perfecto, tO0RO  |
|            1 |     4931 | 2025-09-12 | Falcons         | L   | 0.060      | -            | -                | -                | -         |    -0.01 | fame, FL1T, ICY, Perfecto, tO0RO  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($29,962.15)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-18 |      0.914 | $7,500.00      | $6,858.18       |
| 2025-11-09 |      0.445 | $25,000.00     | $11,127.57      |
| 2025-10-19 |      0.305 | $30,000.00     | $9,153.46       |
| 2025-09-21 |      0.121 | $23,330.00     | $2,822.94       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
