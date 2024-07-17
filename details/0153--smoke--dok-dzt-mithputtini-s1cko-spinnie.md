### Roster Details<br />
Team Name: Smoke<br />
Roster: dok, dzt, MITHPUTTINI, s1cko, spinnie<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [153](../standings_global.md)<br />
Regional Rank: [41]( ../standings_americas.md)<br />
Final Rank Value:  716.3<br />
<br />
Final Rank Value (716.3) = Starting Rank Value (704.8) + Head To Head Adjustments (11.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.289[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.142<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 704.8
- 400 + ( ( 0.142 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 704.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |       80 | 2024-07-15 | Hype       | W   | 1.000      | 0.450        | 0.010 (0.005)    | 0.427 (0.192)    | 0 (0.000) |    23.23 | dok, dzt, MITHPUTTINI, s1cko, spinnie |
|           10 |       86 | 2024-07-15 | Hype       | L   | 1.000      | -            | -                | -                | -         |    -7.77 | dok, dzt, MITHPUTTINI, s1cko, spinnie |
|            9 |      905 | 2024-06-01 | Case       | L   | 0.895      | -            | -                | -                | -         |    -6.00 | dok, dzt, leleo, spinnie, vhz         |
|            8 |      975 | 2024-05-30 | Solid      | L   | 0.881      | -            | -                | -                | -         |    -6.29 | dok, dzt, leleo, spinnie, vhz         |
|            7 |     1035 | 2024-05-27 | Vikings KR | W   | 0.862      | 0.371        | 0.012 (0.004)    | 0.430 (0.137)    | 0 (0.000) |    17.84 | beg0d, dok, dzt, spinnie, vhz         |
|            6 |     1184 | 2024-05-21 | BESTIA     | L   | 0.822      | -            | -                | -                | -         |    -2.90 | beg0d, dok, dzt, spinnie, vhz         |
|            5 |     1187 | 2024-05-21 | BESTIA     | L   | 0.822      | -            | -                | -                | -         |    -2.98 | beg0d, dok, dzt, spinnie, vhz         |
|            4 |     1393 | 2024-05-15 | Fluxo      | L   | 0.782      | -            | -                | -                | -         |    -1.70 | beg0d, dok, dzt, spinnie, vhz         |
|            3 |     1395 | 2024-05-15 | Fluxo      | L   | 0.782      | -            | -                | -                | -         |    -1.74 | beg0d, dok, dzt, spinnie, vhz         |
|            2 |     1451 | 2024-05-14 | 9z         | L   | 0.775      | -            | -                | -                | -         |    -0.10 | beg0d, dok, dzt, spinnie, vhz         |
|            1 |     1456 | 2024-05-14 | 9z         | L   | 0.775      | -            | -                | -                | -         |    -0.10 | beg0d, dok, dzt, spinnie, vhz         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($853.60)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
