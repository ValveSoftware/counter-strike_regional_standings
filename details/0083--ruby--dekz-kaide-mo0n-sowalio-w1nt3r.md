### Roster Details<br />
Team Name: RUBY<br />
Roster: dekz, Kaide, mo0N, sowalio, w1nt3r<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [83](../standings_global.md)<br />
Regional Rank: [58]( ../standings_europe.md)<br />
Final Rank Value:  945.7<br />
<br />
Final Rank Value (945.7) = Starting Rank Value (991.5) + Head To Head Adjustments (-45.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.538[<sup>1</sup>](#table2)
- Bounty Collected: 0.407[<sup>2</sup>](#table1)
- Opponent Network: 0.177[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.280<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 991.5
- 400 + ( ( 0.280 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 991.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |      159 | 2024-06-16 | ARCRED          | W   | 1.000      | 0.450        | 0.055 (0.025)    | 0.365 (0.164)    | 0 (0.000) |    18.42 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           46 |      181 | 2024-06-15 | System5         | L   | 1.000      | -            | -                | -                | -         |   -24.43 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           45 |      193 | 2024-06-15 | Spirit Academy  | W   | 1.000      | 0.450        | 0.019 (0.009)    | -                | 0 (0.000) |     8.77 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           44 |      225 | 2024-06-14 | Zero Tenacity   | L   | 1.000      | -            | -                | -                | -         |    -8.88 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           43 |      233 | 2024-06-14 | LEON            | W   | 1.000      | 0.450        | -                | 0.167 (0.075)    | 0 (0.000) |     6.75 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           42 |      376 | 2024-06-09 | Insilio         | L   | 0.987      | -            | -                | -                | -         |   -11.86 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           41 |      521 | 2024-06-07 | SINNERS         | L   | 0.972      | -            | -                | -                | -         |   -12.51 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           40 |      630 | 2024-06-05 | ARCRED          | L   | 0.960      | -            | -                | -                | -         |   -15.82 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           39 |      648 | 2024-06-05 | Rare Atom       | L   | 0.958      | -            | -                | -                | -         |   -26.04 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           38 |      699 | 2024-06-03 | Insilio         | W   | 0.947      | 0.372        | 0.035 (0.012)    | 0.587 (0.207)    | 0 (0.000) |    15.32 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           37 |      708 | 2024-06-03 | HAVU            | L   | 0.946      | -            | -                | -                | -         |   -23.46 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           36 |      744 | 2024-06-01 | Zero Tenacity   | W   | 0.934      | 0.372        | 0.153 (0.053)    | 1.000 (0.348)    | 0 (0.000) |    20.14 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           35 |      808 | 2024-05-30 | Portugal        | W   | 0.921      | -            | -                | -                | 0 (0.000) |     5.67 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           34 |      818 | 2024-05-30 | FURIA           | L   | 0.919      | -            | -                | -                | -         |    -1.35 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           33 |      862 | 2024-05-28 | MOUZ NXT        | L   | 0.907      | -            | -                | -                | -         |    -9.90 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           32 |      902 | 2024-05-26 | Zero Tenacity   | L   | 0.892      | -            | -                | -                | -         |    -9.36 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           31 |      913 | 2024-05-25 | B8              | L   | 0.888      | -            | -                | -                | -         |    -5.88 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           30 |      953 | 2024-05-23 | Romania         | W   | 0.873      | 0.435        | -                | 0.375 (0.142)    | 0 (0.000) |     6.91 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           29 |     1043 | 2024-05-21 | Endpoint        | W   | 0.858      | 0.435        | 0.017 (0.007)    | 0.524 (0.195)    | 0 (0.000) |    11.74 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           28 |     1382 | 2024-05-11 | 9 Pandas        | L   | 0.793      | -            | -                | -                | -         |    -9.12 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           27 |     1408 | 2024-05-10 | Nemiga          | W   | 0.785      | 0.435        | 0.498 (0.170)    | 0.678 (0.231)    | 0 (0.000) |    20.29 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           26 |     1465 | 2024-05-07 | Insilio         | W   | 0.767      | 0.435        | 0.035 (0.012)    | 0.587 (0.196)    | 0 (0.000) |    12.56 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           25 |     1508 | 2024-05-05 | HAVU            | W   | 0.752      | -            | -                | -                | -         |     5.28 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           24 |     1540 | 2024-05-03 | V1dar           | W   | 0.739      | -            | -                | -                | -         |     2.06 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           23 |     1595 | 2024-05-01 | GL Academy      | L   | 0.725      | -            | -                | -                | -         |   -16.68 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           22 |     1637 | 2024-04-29 | Permitta        | L   | 0.712      | -            | -                | -                | -         |   -11.61 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           21 |     1668 | 2024-04-27 | Astralis Talent | W   | 0.700      | -            | -                | -                | -         |     2.47 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           20 |     1830 | 2024-04-20 | Zero Tenacity   | L   | 0.653      | -            | -                | -                | -         |    -8.42 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           19 |     1910 | 2024-04-18 | Sashi           | L   | 0.640      | -            | -                | -                | -         |    -6.92 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           18 |     1919 | 2024-04-18 | Aurora          | W   | 0.640      | 0.143        | 0.518 (0.047)    | 0.853 (0.078)    | -         |    19.60 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           17 |     1926 | 2024-04-18 | NOM             | W   | 0.639      | -            | -                | -                | -         |     1.64 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           16 |     1973 | 2024-04-17 | JANO            | W   | 0.631      | -            | -                | -                | -         |     3.43 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           15 |     2617 | 2024-03-19 | Sashi           | L   | 0.441      | -            | -                | -                | -         |    -4.54 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           14 |     2674 | 2024-03-16 | Permitta        | W   | 0.420      | 0.372        | 0.038 (0.006)    | 0.837 (0.131)    | -         |     6.87 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           13 |     2810 | 2024-03-11 | Romania         | L   | 0.387      | -            | -                | -                | -         |    -8.28 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           12 |     2846 | 2024-03-09 | Spirit Academy  | W   | 0.374      | -            | -                | -                | -         |     1.10 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           11 |     2873 | 2024-03-08 | ARCRED          | W   | 0.367      | 0.372        | 0.055 (0.008)    | -                | -         |     4.37 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|           10 |     3103 | 2024-02-27 | Spirit Academy  | L   | 0.300      | -            | -                | -                | -         |    -8.69 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            9 |     3107 | 2024-02-27 | ALTERNATE aTTaX | W   | 0.300      | -            | -                | -                | -         |     5.49 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            8 |     3508 | 2024-02-09 | FORZE           | L   | 0.180      | -            | -                | -                | -         |    -3.02 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            7 |     3522 | 2024-02-08 | AMKAL           | L   | 0.174      | -            | -                | -                | -         |    -1.66 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            6 |     3524 | 2024-02-08 | ex-Guild Eagles | W   | 0.173      | -            | -                | -                | -         |     2.05 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            5 |     3692 | 2024-01-30 | Nemiga          | L   | 0.114      | -            | -                | -                | -         |    -0.58 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            4 |     3697 | 2024-01-30 | Permitta        | W   | 0.114      | -            | -                | -                | -         |     1.64 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            3 |     3704 | 2024-01-30 | Kosovo          | W   | 0.113      | -            | -                | -                | -         |     1.12 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            2 |     4060 | 2024-01-17 | AMKAL           | L   | 0.028      | -            | -                | -                | -         |    -0.26 | dekz, Kaide, mo0N, sowalio, w1nt3r |
|            1 |     4125 | 2024-01-16 | Passion UA      | L   | 0.020      | -            | -                | -                | -         |    -0.29 | dekz, Kaide, mo0N, sowalio, w1nt3r |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($35,841.86)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $30,000.00     | $30,000.00      |
| 2024-06-10 |      0.994 | $3,300.00      | $3,281.07       |
| 2024-05-12 |      0.800 | $2,000.00      | $1,600.59       |
| 2024-03-25 |      0.480 | $2,000.00      | $960.20         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
