### Roster Details<br />
Team Name: adalYamigos<br />
Roster: delboNi, f4stzin, piriajr, shz, zqkS<br />
Global Rank: [203](../../standings_global_2024_08_28.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_08_28.md)<br />
Regional Rank: [55]( ../../standings_americas_2024_08_28.md)<br />
<br />
Final Rank Value:  561.3<br />
<br />
Final Rank Value (561.3) = Starting Rank Value (544.9) + Head To Head Adjustments (16.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.272[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.073<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 544.9
- 400 + ( ( 0.073 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 544.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     3749 | 2024-04-12 | Case     | L   | 0.282      | -            | -                | -                | -         |    -0.84 | delboNi, f4stzin, piriajr, shz, zqkS |
|           13 |     3769 | 2024-04-11 | Imperial | L   | 0.275      | -            | -                | -                | -         |    -0.37 | delboNi, f4stzin, piriajr, shz, zqkS |
|           12 |     3858 | 2024-04-09 | MIBR     | L   | 0.262      | -            | -                | -                | -         |    -0.12 | delboNi, f4stzin, piriajr, shz, zqkS |
|           11 |     3862 | 2024-04-09 | MIBR     | L   | 0.262      | -            | -                | -                | -         |    -0.12 | delboNi, f4stzin, piriajr, shz, zqkS |
|           10 |     3934 | 2024-04-07 | Case     | W   | 0.249      | 0.435        | 0.045 (0.005)    | 0.746 (0.081)    | 0 (0.000) |     7.15 | delboNi, f4stzin, piriajr, shz, zqkS |
|            9 |     3969 | 2024-04-05 | 2GAME    | L   | 0.235      | -            | -                | -                | -         |    -2.94 | delboNi, f4stzin, piriajr, shz, zqkS |
|            8 |     3970 | 2024-04-05 | 2GAME    | W   | 0.235      | 0.450        | 0.002 (0.000)    | 0.020 (0.002)    | 0 (0.000) |     4.52 | delboNi, f4stzin, piriajr, shz, zqkS |
|            7 |     3989 | 2024-04-04 | BESTIA   | W   | 0.229      | 0.450        | 0.115 (0.012)    | 0.778 (0.080)    | 0 (0.000) |     6.61 | delboNi, f4stzin, piriajr, shz, zqkS |
|            6 |     3993 | 2024-04-04 | BESTIA   | L   | 0.229      | -            | -                | -                | -         |    -0.60 | delboNi, f4stzin, piriajr, shz, zqkS |
|            5 |     4480 | 2024-03-12 | Solid    | L   | 0.075      | -            | -                | -                | -         |    -0.78 | delboNi, f4stzin, piriajr, shz, zqkS |
|            4 |     4519 | 2024-03-10 | BESTIA   | W   | 0.062      | 0.435        | 0.115 (0.003)    | 0.778 (0.021)    | 0 (0.000) |     1.81 | delboNi, f4stzin, piriajr, shz, zqkS |
|            3 |     4573 | 2024-03-08 | Flamengo | W   | 0.047      | 0.435        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.45 | delboNi, f4stzin, piriajr, shz, zqkS |
|            2 |     4653 | 2024-03-05 | Case     | W   | 0.029      | 0.450        | 0.045 (0.001)    | 0.746 (0.010)    | 0 (0.000) |     0.83 | delboNi, f4stzin, piriajr, shz, zqkS |
|            1 |     4655 | 2024-03-05 | Case     | W   | 0.029      | 0.450        | 0.045 (0.001)    | 0.746 (0.010)    | 0 (0.000) |     0.83 | delboNi, f4stzin, piriajr, shz, zqkS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($290,989.03)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
