### Roster Details<br />
Team Name: LAG<br />
Roster: based, Experative, nicx, Nyyx, ogwizard<br />
Global Rank: [186](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_11_06.md)<br />
Regional Rank: [53]( ../../standings_americas_2024_11_06.md)<br />
<br />
Final Rank Value:  625.7<br />
<br />
Final Rank Value (625.7) = Starting Rank Value (616.6) + Head To Head Adjustments (9.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.257[<sup>1</sup>](#table2)
- Bounty Collected: 0.184[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.110<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 616.6
- 400 + ( ( 0.110 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 616.6


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
|           15 |     3845 | 2024-06-13 | Mythic          | L   | 0.230      | -            | -                | -                | -         |    -2.78 | based, Experative, nicx, Nyyx, ogwizard |
|           14 |     4017 | 2024-06-08 | Homyno          | W   | 0.196      | 0.371        | 0.003 (0.000)    | 0.094 (0.007)    | 0 (0.000) |     3.22 | based, Experative, nicx, Nyyx, ogwizard |
|           13 |     4073 | 2024-06-07 | Wildcard        | L   | 0.190      | -            | -                | -                | -         |    -0.47 | based, Experative, nicx, Nyyx, ogwizard |
|           12 |     4157 | 2024-06-06 | Vibe            | W   | 0.181      | 0.371        | 0.000 (0.000)    | 0.019 (0.001)    | 0 (0.000) |     1.90 | based, Experative, nicx, Nyyx, ogwizard |
|           11 |     4198 | 2024-06-05 | NRG             | L   | 0.176      | -            | -                | -                | -         |    -0.93 | based, Experative, nicx, Nyyx, ogwizard |
|           10 |     4207 | 2024-06-05 | Carpe Diem      | W   | 0.175      | 0.384        | 0.001 (0.000)    | 0.010 (0.001)    | 0 (0.000) |     2.83 | based, Experative, nicx, Nyyx, ogwizard |
|            9 |     4250 | 2024-06-04 | Carpe Diem      | W   | 0.170      | 0.477        | 0.001 (0.000)    | 0.010 (0.001)    | 0 (0.000) |     2.79 | based, Experative, nicx, Nyyx, ogwizard |
|            8 |     4259 | 2024-06-04 | Retirement Home | W   | 0.169      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.21 | based, Experative, nicx, Nyyx, ogwizard |
|            7 |     4564 | 2024-05-22 | Limitless       | W   | 0.083      | 0.477        | 0.000 (0.000)    | 0.021 (0.001)    | 0 (0.000) |     0.90 | based, Experative, nicx, Nyyx, ogwizard |
|            6 |     4567 | 2024-05-22 | Limitless       | W   | 0.083      | 0.477        | 0.000 (0.000)    | 0.021 (0.001)    | 0 (0.000) |     0.90 | based, Experative, nicx, Nyyx, ogwizard |
|            5 |     4570 | 2024-05-22 | Wildcard        | L   | 0.082      | -            | -                | -                | -         |    -0.19 | based, Experative, nicx, Nyyx, ogwizard |
|            4 |     4814 | 2024-05-15 | NRG             | L   | 0.036      | -            | -                | -                | -         |    -0.18 | based, Experative, nicx, Nyyx, ogwizard |
|            3 |     4822 | 2024-05-15 | NRG             | L   | 0.036      | -            | -                | -                | -         |    -0.18 | based, Experative, nicx, Nyyx, ogwizard |
|            2 |     4868 | 2024-05-14 | Carpe Diem      | W   | 0.029      | 0.477        | 0.001 (0.000)    | 0.010 (0.000)    | 0 (0.000) |     0.48 | based, Experative, nicx, Nyyx, ogwizard |
|            1 |     4875 | 2024-05-14 | Carpe Diem      | L   | 0.029      | -            | -                | -                | -         |    -0.45 | based, Experative, nicx, Nyyx, ogwizard |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($609.12)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
