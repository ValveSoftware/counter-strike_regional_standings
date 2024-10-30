### Roster Details<br />
Team Name: Honvéd<br />
Roster: Aaron, bodito, fleav, Kamion, kory<br />
Global Rank: [119](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_30.md)<br />
Regional Rank: [84]( ../../standings_europe_2024_10_30.md)<br />
<br />
Final Rank Value:  813.7<br />
<br />
Final Rank Value (813.7) = Starting Rank Value (810.6) + Head To Head Adjustments (3.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.333[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.276[<sup>2</sup>](#table1)

The average of these factors is 0.207<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 810.6
- 400 + ( ( 0.207 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 810.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      493 | 2024-10-06 | BEE        | W   | 1.000      | 0.300        | 0.005 (0.002)    | 0.034 (0.010)    | 1 (1.000) |    11.59 | Aaron, bodito, fleav, Kamion, kory   |
|           10 |      499 | 2024-10-06 | Last Dance | W   | 1.000      | 0.300        | 0.003 (0.001)    | 0.000 (0.000)    | 1 (1.000) |     5.85 | Aaron, bodito, fleav, Kamion, kory   |
|            9 |     3470 | 2024-07-10 | Norway     | L   | 0.454      | -            | -                | -                | -         |   -10.82 | Aaron, coolio, fleav, kory, xavi     |
|            8 |     3477 | 2024-07-10 | Sampi      | L   | 0.454      | -            | -                | -                | -         |    -3.41 | Aaron, coolio, fleav, kory, xavi     |
|            7 |     3513 | 2024-07-08 | Belgium    | W   | 0.441      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.27 | Aaron, coolio, fleav, kory, xavi     |
|            6 |     3520 | 2024-07-08 | ECLOT      | L   | 0.440      | -            | -                | -                | -         |    -1.18 | Aaron, coolio, fleav, kory, xavi     |
|            5 |     3773 | 2024-06-11 | 3DMAX      | L   | 0.260      | -            | -                | -                | -         |    -0.15 | bodito, fleav, Kamion, Memeske, xavi |
|            4 |     4355 | 2024-05-26 | Spirit HU  | W   | 0.153      | 0.299        | 0.001 (0.000)    | 0.010 (0.000)    | 1 (0.153) |     1.33 | bodito, coolio, fleav, Kamion, xavi  |
|            3 |     4359 | 2024-05-26 | WiLD       | W   | 0.152      | 0.299        | 0.003 (0.000)    | 0.005 (0.000)    | 1 (0.152) |     1.25 | bodito, coolio, fleav, Kamion, xavi  |
|            2 |     4377 | 2024-05-25 | Spirit HU  | L   | 0.146      | -            | -                | -                | -         |    -3.36 | bodito, coolio, fleav, Kamion, xavi  |
|            1 |     4381 | 2024-05-25 | bullpeek   | W   | 0.145      | 0.299        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.145) |     0.72 | bodito, coolio, fleav, Kamion, xavi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,427.68)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-06 |      1.000 | $2,113.00      | $2,113.00       |
| 2024-05-26 |      0.153 | $2,055.00      | $314.68         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
