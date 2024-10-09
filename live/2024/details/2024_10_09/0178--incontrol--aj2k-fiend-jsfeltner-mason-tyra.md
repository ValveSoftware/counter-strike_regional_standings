### Roster Details<br />
Team Name: InControl<br />
Roster: AJ2k, FIEND, jsfeltner, mason, TyRa<br />
Global Rank: [178](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_09.md)<br />
Regional Rank: [50]( ../../standings_americas_2024_10_09.md)<br />
<br />
Final Rank Value:  633.3<br />
<br />
Final Rank Value (633.3) = Starting Rank Value (684.3) + Head To Head Adjustments (-51.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.337[<sup>1</sup>](#table2)
- Bounty Collected: 0.227[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.147<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 684.3
- 400 + ( ( 0.147 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 684.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      531 | 2024-09-24 | Lore             | L   | 1.000      | -            | -                | -                | -         |   -20.32 | AJ2k, FIEND, jsfeltner, mason, TyRa  |
|           15 |      573 | 2024-09-23 | Revenge Nation   | L   | 1.000      | -            | -                | -                | -         |   -17.84 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|           14 |      660 | 2024-09-20 | DETONATE         | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.123 (0.045)    | 0 (0.000) |     9.94 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|           13 |      684 | 2024-09-19 | undefined        | L   | 1.000      | -            | -                | -                | -         |    -9.76 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|           12 |      787 | 2024-09-16 | Mythic           | L   | 1.000      | -            | -                | -                | -         |   -13.47 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|           11 |      940 | 2024-09-11 | Akimbo           | L   | 1.000      | -            | -                | -                | -         |   -10.86 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|           10 |      997 | 2024-09-09 | Final Form       | W   | 1.000      | 0.372        | 0.004 (0.002)    | 0.153 (0.057)    | 0 (0.000) |    14.82 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            9 |     1037 | 2024-09-07 | Nouns            | L   | 0.988      | -            | -                | -                | -         |    -2.88 | Beast, jsfeltner, mason, Pugg, TyRa  |
|            8 |     1741 | 2024-08-19 | Party Astronauts | L   | 0.862      | -            | -                | -                | -         |    -4.45 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            7 |     1838 | 2024-08-15 | NRG              | L   | 0.835      | -            | -                | -                | -         |    -3.61 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            6 |     1897 | 2024-08-13 | M80              | L   | 0.822      | -            | -                | -                | -         |    -0.60 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            5 |     1978 | 2024-08-11 | Homyno           | W   | 0.809      | 0.371        | 0.006 (0.002)    | 0.121 (0.036)    | 0 (0.000) |    10.56 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            4 |     2025 | 2024-08-09 | LAG              | W   | 0.795      | 0.371        | 0.002 (0.001)    | 0.242 (0.071)    | 0 (0.000) |    14.92 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            3 |     2170 | 2024-08-05 | Aether           | W   | 0.769      | 0.371        | 0.000 (0.000)    | 0.100 (0.028)    | 0 (0.000) |     6.53 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            2 |     2462 | 2024-07-28 | Vibe             | L   | 0.716      | -            | -                | -                | -         |   -16.41 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            1 |     2584 | 2024-07-24 | Take Flyte       | L   | 0.690      | -            | -                | -                | -         |    -7.56 | DYLAN, FIEND, jsfeltner, mason, TyRa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,300.00)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
