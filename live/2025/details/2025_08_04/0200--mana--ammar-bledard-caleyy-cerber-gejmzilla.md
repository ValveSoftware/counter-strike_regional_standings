### Roster Details<br />
Team Name: MANA<br />
Roster: ammar, BledarD, Caleyy, cerber, gejmzilla<br />
Global Rank: [200](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [107]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  602.4<br />
<br />
Final Rank Value (602.4) = Starting Rank Value (544.1) + Head To Head Adjustments (58.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.245[<sup>2</sup>](#table1)
- Opponent Network: 0.060[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.076<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 544.1
- 400 + ( ( 0.076 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 544.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      161 | 2025-07-21 | m1x            | L   | 1.000      | -            | -                | -                | -         |    -9.07 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|           13 |      254 | 2025-07-17 | AMKAL          | L   | 1.000      | -            | -                | -                | -         |    -8.05 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|           12 |      330 | 2025-07-14 | Fire Flux      | W   | 1.000      | 0.435        | 0.003 (0.001)    | 0.512 (0.222)    | 0 (0.000) |    20.97 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|           11 |      457 | 2025-07-09 | GUN5           | L   | 1.000      | -            | -                | -                | -         |    -4.33 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|           10 |      514 | 2025-07-02 | Marius         | W   | 0.980      | 0.435        | 0.011 (0.005)    | 0.597 (0.254)    | 0 (0.000) |    22.00 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            9 |      567 | 2025-06-24 | TPuDCATb TPu   | L   | 0.926      | -            | -                | -                | -         |    -5.65 | ammar, BledarD, Caleyy, cerber, gejmzilla |
|            8 |      979 | 2025-05-29 | Fisher College | W   | 0.752      | 0.143        | 0.001 (0.000)    | 0.236 (0.025)    | 0 (0.000) |    15.59 | ammar, BledarD, Caleyy, gejmzilla, tripey |
|            7 |     1013 | 2025-05-26 | UNiTY          | W   | 0.732      | 0.143        | 0.000 (0.000)    | 0.216 (0.023)    | 0 (0.000) |    10.77 | ammar, BledarD, Caleyy, gejmzilla, tripey |
|            6 |     1575 | 2025-05-02 | GUN5           | L   | 0.574      | -            | -                | -                | -         |    -1.65 | ammar, BledarD, Caleyy, gejmzilla, tripey |
|            5 |     1678 | 2025-04-28 | ECLOT          | L   | 0.546      | -            | -                | -                | -         |    -1.84 | ammar, BledarD, Caleyy, gejmzilla, tripey |
|            4 |     1751 | 2025-04-25 | fnatic         | L   | 0.527      | -            | -                | -                | -         |    -0.38 | ammar, BledarD, Caleyy, gejmzilla, tripey |
|            3 |     1790 | 2025-04-22 | 9INE           | W   | 0.507      | 0.143        | 0.020 (0.001)    | 0.819 (0.059)    | 0 (0.000) |    15.34 | ammar, BledarD, Caleyy, gejmzilla, tripey |
|            2 |     2939 | 2025-03-15 | AMKAL          | L   | 0.254      | -            | -                | -                | -         |    -1.80 | ammar, Caleyy, gejmzilla, tripey, v1w     |
|            1 |     2949 | 2025-03-15 | Betera         | W   | 0.253      | 0.143        | 0.012 (0.000)    | 0.355 (0.013)    | 0 (0.000) |     6.40 | ammar, Caleyy, gejmzilla, tripey, v1w     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
