### Roster Details<br />
Team Name: Undone<br />
Roster: chop, Cxzi, motm, Skadoodle, steel<br />
Global Rank: [105](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_03.md)<br />
Regional Rank: [25]( ../../standings_americas_2025_03_03.md)<br />
<br />
Final Rank Value:  767.3<br />
<br />
Final Rank Value (767.3) = Starting Rank Value (753.2) + Head To Head Adjustments (14.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.276[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.221[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 753.2
- 400 + ( ( 0.183 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 753.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      895 | 2024-12-14 | Bad News Capybaras | W   | 0.677      | 0.143        | 0.000 (0.000)    | 0.142 (0.014)    | 0 (0.000) |     7.84 | chop, Cxzi, motm, Skadoodle, steel |
|           12 |      924 | 2024-12-13 | SUPER EVIL GANG    | W   | 0.670      | 0.143        | 0.008 (0.001)    | 0.289 (0.028)    | 0 (0.000) |     8.93 | chop, Cxzi, motm, Skadoodle, steel |
|           11 |      960 | 2024-12-11 | Bad News Capybaras | W   | 0.656      | 0.143        | 0.000 (0.000)    | 0.142 (0.013)    | 0 (0.000) |     7.66 | chop, Cxzi, motm, Skadoodle, steel |
|           10 |      972 | 2024-12-10 | InControl          | W   | 0.650      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.63 | chop, Cxzi, motm, Skadoodle, steel |
|            9 |      999 | 2024-12-08 | Nouns              | L   | 0.634      | -            | -                | -                | -         |    -6.95 | chop, Cxzi, motm, steel, taggy     |
|            8 |     1014 | 2024-12-07 | MIGHT              | W   | 0.630      | 0.384        | 0.002 (0.000)    | 0.341 (0.082)    | 1 (0.630) |    10.88 | chop, Cxzi, motm, steel, taggy     |
|            7 |     1020 | 2024-12-07 | Fisher College     | W   | 0.629      | 0.384        | 0.006 (0.001)    | 0.123 (0.030)    | 1 (0.629) |    10.21 | chop, Cxzi, motm, steel, taggy     |
|            6 |     1024 | 2024-12-07 | NRG                | L   | 0.628      | -            | -                | -                | -         |    -3.90 | chop, Cxzi, motm, steel, taggy     |
|            5 |     1050 | 2024-12-06 | Anti-Eco Club      | W   | 0.623      | 0.384        | 0.000 (0.000)    | 0.037 (0.009)    | 1 (0.623) |     3.18 | chop, Cxzi, motm, steel, taggy     |
|            4 |     1074 | 2024-12-05 | SUPER EVIL GANG    | L   | 0.617      | -            | -                | -                | -         |   -11.05 | chop, Cxzi, motm, Skadoodle, steel |
|            3 |     1147 | 2024-12-02 | Make Your Mind     | L   | 0.597      | -            | -                | -                | -         |   -10.91 | chop, Cxzi, motm, Skadoodle, steel |
|            2 |     1319 | 2024-11-23 | BLUEJAYS           | L   | 0.535      | -            | -                | -                | -         |    -2.05 | chop, Cxzi, motm, Skadoodle, steel |
|            1 |     2639 | 2024-09-29 | Party Astronauts   | L   | 0.169      | -            | -                | -                | -         |    -2.40 | BeaKie, chop, Cxzi, motm, stamina  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($795.43)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.636 | $1,250.00      | $795.43         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
